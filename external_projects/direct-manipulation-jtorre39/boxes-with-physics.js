($ => {

    // a holder for data associated with a specific touch
    let touchHolder = {};

    /**
     * Utility function for disabling certain behaviors when the drawing
     * area is in certain states.
     */
    let setupDragState = () => $(".drawing-area .box")
        .unbind("mousemove")
        .unbind("mouseleave")
        .unbind("touchmove")
        .unbind("touchend");

    /**
     * Indicates that an element is highlighted.
     */
    let highlight = event => $(event.currentTarget).addClass("box-highlight");

    /**
     * Indicates that an element is unhighlighted.
     */
    let unhighlight = event => $(event.currentTarget).removeClass("box-highlight");


    let startDraw = function(event) {
        // Check for touch first.

        $.each(event.changedTouches, (index, touch) => {
            // Add a new box to the drawing area.
            let id = touch.identifier;
            // Initialize the value at a given key.
            touchHolder[id] = {};

            // Here we use touchHolder to hold "local" variables.
            touchHolder[id].anchorX = touch.pageX;
            touchHolder[id].anchorY = touch.pageY;

            let position = {
                left: touch.pageX,
                top: touch.pageY
            };

            touchHolder[id].drawingBox = $("<div></div>")
                .appendTo(this)
                .addClass("box")
                .data({
                    position
                }) // This is our model.
                .offset(position) // This is our view. We keep them separate because the browser might change this.

                // We add touch event handlers on our boxes.
                .bind("touchstart", startMove)
                .bind("touchend", unhighlight);

        });

        setupDragState();
    };

    /**
     * Tracks a box as it is rubberbanded or moved across the drawing area.
     */
    let trackDrag = function(event) {
        $.each(event.changedTouches, (index, touch) => {

            let id = touch.identifier;

            if (touchHolder[id].drawingBox) {
                let newPosition = {
                    left: (touchHolder[id].anchorX < touch.pageX) ? touchHolder[id].anchorX : touch.pageX,
                    top: (touchHolder[id].anchorY < touch.pageY) ? touchHolder[id].anchorY : touch.pageY
                };

                touchHolder[id].drawingBox
                    .data({
                        position: newPosition
                    })
                    .offset(newPosition)
                    .width(Math.abs(touch.pageX - touchHolder[id].anchorX))
                    .height(Math.abs(touch.pageY - touchHolder[id].anchorY));
            } else if (touchHolder[id].movingBox) {
                // Highlight the element.
                let newPosition = {
                    left: touch.pageX - touchHolder[id].deltaX,
                    top: touch.pageY - touchHolder[id].deltaY
                };
                // check if the box is out of bounds
                if (checkIfOutOfBounds(touchHolder[id].target, touch.pageX, touch.pageY)) {
                    touchHolder[id].movingBox.remove();
                    return;
                }

                touchHolder[id].movingBox
                    .data({
                        position: newPosition
                    })
                    .offset(newPosition);
            }
        });

        event.preventDefault();
    };

    let checkIfOutOfBounds = ($element, x, y) => {
        let $parent = $element.parent();

        let bounds = {
            left: $parent.offset().left,
            top: $parent.offset().top
        };

        bounds.right = bounds.left + $parent.width();
        bounds.bottom = bounds.top + $parent.height();

        return x > bounds.right ||
            x < bounds.left ||
            y < bounds.top ||
            y > bounds.bottom;
    };


    let cleanUpTouch = (id) => {
        delete touchHolder[id];
    };

    let endDrag = function(event) {
        $.each(event.changedTouches, (index, touch) => {
            let id = touch.identifier;

            if (touchHolder[id].drawingBox) {
                touchHolder[id].drawingBox.bind("touchmove", startMove);
                touchHolder[id].drawingBox = null;

                cleanUpTouch(id);

            } else if (touchHolder[id].movingBox) {
                // Change state to "not-moving-anything" by clearing out
                // the key at an indentifier and also restore highlighting
                touchHolder[id].target
                    .removeClass("box-highlight")
                    .mousemove(highlight)
                    .mouseleave(unhighlight);
                cleanUpTouch(id);
            }
        });
    };

    /**
     * Begins a box move sequence.
     */
    let startMove = function(event) {
        // check for touch first
        $.each(event.changedTouches, (index, touch) => {
            // Highlight the element.
            let id = touch.identifier;

            touchHolder[id] = {};

            touchHolder[id].target = $(touch.target);
            touchHolder[id].target.addClass("box-highlight");

            // Take note of the box's current (global) location.
            let startOffset = touchHolder[id].target.offset();
            touchHolder[id].target.data({
                position: startOffset
            });

            // Set the drawing area's state to indicate that it is
            // in the middle of a move.
            touchHolder[id].movingBox = touchHolder[id].target;
            touchHolder[id].deltaX = touch.pageX - startOffset.left;
            touchHolder[id].deltaY = touch.pageY - startOffset.top;
            setupDragState();
        });
        event.stopPropagation();
    };

    /**
     * The motion update routine.
     */
    const FRICTION_FACTOR = 0.99;
    const ACCELERATION_COEFFICIENT = -0.05;
    const BOUNCE_REDUCTION_COEFFICIENT = 0.7;
    const MINIMUM_BRICK_BOUNCE = 12;
    const FRAME_RATE = 120;
    const FRAME_DURATION = 1000 / FRAME_RATE;

    let lastTimestamp = 0;
    let updateBoxes = timestamp => {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        // Keep that frame rate under control.
        if (timestamp - lastTimestamp < FRAME_DURATION) {
            window.requestAnimationFrame(updateBoxes);
            return;
        }

        $("div.ball").each((index, element) => {
            let $element = $(element);

            // If it's highlighted, we don't accelerate it because it is under a finger.
            if ($element.hasClass("ball-highlight")) {
                return;
            }

            // Note how we base all of our calculations from the _model_...
            let s = $element.data('position');
            let v = $element.data('velocity');
            let a = $element.data('acceleration');

            // Check, adjust, then update.


            v.x += (a.x * ACCELERATION_COEFFICIENT);
            v.y += (a.y * ACCELERATION_COEFFICIENT);
            v.z += (a.z * ACCELERATION_COEFFICIENT);

            v.x *= FRICTION_FACTOR;
            v.y *= FRICTION_FACTOR;
            v.z *= FRICTION_FACTOR;

            let $parent = $element.parent();
            let width = $element.width();
            let height = $element.height();

            let bounds = calculateBounds($parent, $parent.offset());

            let updatedS = {
                left: s.left + v.x,
                top: s.top - v.y
            };

            if ((updatedS.left <= bounds.left) || (updatedS.left + width > bounds.right)) {
                v.x = -v.x * BOUNCE_REDUCTION_COEFFICIENT;
            } else {
                s.left = updatedS.left;
            }

            if ((updatedS.top <= bounds.top) || (updatedS.top + height > bounds.bottom)) {
                v.y = -v.y * BOUNCE_REDUCTION_COEFFICIENT;
            } else {
                s.top = updatedS.top;
            }

            let radius = $element.width() / 2;

            // We must find the center x and y.
            let currentCircle = {
                x: s.left + radius,
                y: s.top + radius,
                r: radius
            };

            updateCollision(v, currentCircle);

            // ...and the final result is sent on a one-way trip to the _view_.
            $(element).offset(s);

        });

        lastTimestamp = timestamp;
        window.requestAnimationFrame(updateBoxes);
    };

    let bounce = (v) => {
        v.x = Math.abs(v.x) >= MINIMUM_BRICK_BOUNCE ? -v.x : -MINIMUM_BRICK_BOUNCE * Math.sign(v.x);
        v.y = Math.abs(v.y) <= MINIMUM_BRICK_BOUNCE ? -v.y : -MINIMUM_BRICK_BOUNCE * Math.sign(v.y);
    };

    // Circle - Rect collision check credit to markE from:
    // https://stackoverflow.com/questions/21089959/detecting-collision-of-rectangle-with-circle

    let updateCollision = (v, circle) => {

        $(".drawing-area .box").each((index, element) => {
            let box = $(element);
            let offset = box.offset();

            // Note x and y here are the upper-left corner of the rect.
            let rectangle = {
                x: offset.left,
                y: offset.top,
                w: box.width(),
                h: box.height()
            };

            if (collisionHappened(circle, rectangle)) {
                bounce(v);
            }
        });
    };

    let collisionHappened = (circle, rectangle) => {
        // First we find the distance between the centers.

        let distance = {
            x: Math.abs(circle.x - rectangle.x - rectangle.w / 2),
            y: Math.abs(circle.y - rectangle.y - rectangle.h / 2)
        };

        // Now we check if the distance between half of the Circle
        // and half of the rectangle is too big, then they are
        // not colliding.

        if (distance.x > (rectangle.w / 2 + circle.r) ||
            distance.y > (rectangle.h / 2 + circle.r)) {
            return false;
        }

        // Next, if the distance is less than half the rectangle they
        // are colliding.

        if (distance.x <= (rectangle.w / 2) || distance.y <= (rectangle.h / 2)) {
            return true;
        }

        // This last step is a bit tricker. If we get this far it is now time to
        // test for a collision at the rectangle corner. We check if the Circle
        // is on any line extending from the rectangle's center.

        let dx = distance.x - rectangle.w / 2;
        let dy = distance.y - rectangle.h / 2;

        // The final return statement uses pythagoras' formula to check the
        // distance between the centers. Again, credit to markE from
        // stackoverflow.

        return dx * dx + dy * dy <= (circle.r * circle.r);
    };

    let calculateBounds = (element, offset) => {
        return {
            left: offset.left,
            top: offset.top,
            right: offset.left + element.width(),
            bottom: offset.top + element.height()
        };
    };

    /**
     * Sets up the given jQuery collection as the drawing area(s).
     */
    let setDrawingArea = jQueryElements => {

        // Set up the drawing area for touch behavior.

        jQueryElements
            .addClass("drawing-area")

            // We now bind touch events to the drawing-area.
            .bind("touchstart", startDraw)
            .bind("touchmove", trackDrag)
            .bind("touchend", endDrag)


            .find("div.ball").each((index, element) => {
                $(element)
                    .data({
                        position: $(element).offset(),
                        velocity: { x: 0, y: 0, z: 0 },
                        acceleration: { x: 0, y: 0, z: 0 }
                    });
            });

        // In this sample, device acceleration is the _sole_ determiner of a ball's acceleration.
        window.ondevicemotion = event => {
            let a = event.accelerationIncludingGravity;
            $("div.ball").each((index, element) => {
                $(element).data('acceleration', a);
            });
        };

        // Start the animation sequence.
        window.requestAnimationFrame(updateBoxes);
    };

    // No arrow function here because we don't want lexical scoping.
    $.fn.boxesWithPhysics = function() {
        setDrawingArea(this);
        return this;
    };
})(jQuery);
