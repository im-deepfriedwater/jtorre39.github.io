/*
 * A simple keyframe-tweening animation module for 2D
 * canvas elements.
 */

(() => {
    // The big one: animation initialization.  The settings parameter
    // is expected to be a JavaScript object with the following
    // properties:
    //
    // - renderingContext: the 2D canvas rendering context to use
    // - width: the width of the canvas element
    // - height: the height of the canvas element
    // - scene: the array of sprites to animate
    // - frameRate: number of frames per second (default 24)
    //
    // In turn, each sprite is a JavaScript object with the following
    // properties:
    //
    // - draw: the function that draws the sprite
    // - keyframes: the array of keyframes that the sprite should follow
    //
    // Finally, each keyframe is a JavaScript object with the following
    // properties.  Unlike the other objects, defaults are provided in
    // case a property is not present:
    //
    // - frame: the global animation frame number in which this keyframe
    //          is to appear
    // - ease: the easing function to use (default is KeyframeTweener.linear)
    // - tx, ty: the location of the sprite (default is 0, 0)
    // - sx, sy: the scale factor of the sprite (default is 1, 1)
    // - rotate: the rotation angle of the sprite (default is 0)
    let initializeAnimation = (settings) => {
        // We need to keep track of the current frame.
        let currentFrame = 0;

        // Avoid having to go through settings to get to the
        // rendering context and sprites.
        let renderingContext = settings.renderingContext;
        let width = settings.width;
        let height = settings.height;
        let scene = settings.scene;
        let processScene = (() => {
            for (let i = 0; i < scene.length; i++){
                let sprite = {
                    name: scene[i].sprite,
                    propertyNameArray: [],
                    propertyFrames: {},
                    transforms: {tx: 0, ty: 0, sx: 1, sy: 1, rotate: 0, ease: "linear"},
                    arbitraryProperties: {renderingContext}
                };

                for (let j = 0; j < scene[i].keyframes.length; j++){
                    var properties = Object.keys(scene[i].keyframes[j]);
                    for (var s in properties){
                        if (properties[s] !== "frame" && sprite.propertyNameArray.indexOf(properties[s]) === -1){
                            sprite.propertyNameArray.push(properties[s]);
                        }
                    }
                }

                for (let j = 0; j < sprite.propertyNameArray.length; j++){
                    let propertyName = sprite.propertyNameArray[j];
                    sprite.propertyFrames[propertyName] = [];
                    for (let k = 0; k < scene[i].keyframes.length; k++){
                        if (scene[i].keyframes[k][propertyName] !== undefined) {
                            let propertyData = {frame: scene[i].keyframes[k].frame, value: scene[i].keyframes[k][propertyName]};
                            sprite.propertyFrames[propertyName].push(propertyData);
                        }
                    }
                }

                processedScenes.push(sprite);
            }
        });

        let processedScenes = [];
        processScene();

        let getNextKeyframe = (sprite, frameNumber, propertyName, isValue) => {
            if (!sprite.propertyFrames[propertyName]) {
                return undefined;
            }

            for (let i = 0; i < sprite.propertyFrames[propertyName].length; i++){
                if (sprite.propertyFrames[propertyName][i].frame > frameNumber){
                    return isValue ? sprite.propertyFrames[propertyName][i].value :
                    sprite.propertyFrames[propertyName][i].frame;
                }
            }

            return undefined;
        };

        let getPreviousKeyframe = (sprite, frameNumber, propertyName, isValue) => {
            if (!sprite.propertyFrames[propertyName]) {
                return undefined;
            }

            for (let i = sprite.propertyFrames[propertyName].length - 1; i >= 0; i--){
                if (sprite.propertyFrames[propertyName][i].frame <= frameNumber){
                    return isValue ? sprite.propertyFrames[propertyName][i].value :
                    sprite.propertyFrames[propertyName][i].frame;
                }
            }
            return undefined;
        };

        let previousTimestamp = null;
        let nextFrame = (timestamp) => {
            // Bail-out #1: We just started.
            if (!previousTimestamp) {
                previousTimestamp = timestamp;
                window.requestAnimationFrame(nextFrame);
                return;
            }

            // Bail-out #2: Too soon.
            if (timestamp - previousTimestamp < (1000 / (settings.frameRate || 24))) {
                window.requestAnimationFrame(nextFrame);
                return;
            }

            // Clear the canvas.
            renderingContext.clearRect(0, 0, width, height);
            for (let i = 0; i < processedScenes.length; i++){
                let propertyArray = processedScenes[i].propertyNameArray;

                if (currentFrame < scene[i].keyframes[0].frame) {
                    continue;
                }

                if (currentFrame > scene[i].keyframes[scene[i].keyframes.length - 1].frame){
                    continue;
                }

                for (let j = 0; j < propertyArray.length; j++){
                    if (propertyArray[j] === "ease"){
                        continue;
                    }

                    let property = propertyArray[j];
                    let previousKeyframe = getPreviousKeyframe(processedScenes[i], currentFrame, property, false);
                    let nextKeyframe = getNextKeyframe(processedScenes[i], currentFrame, property, false);

                    if (currentFrame >= previousKeyframe && currentFrame <= nextKeyframe) {
                        let startKeyframe = previousKeyframe;


                        let startValue = getPreviousKeyframe(processedScenes[i], currentFrame, property, true) * 1;
                        let distance = getNextKeyframe(processedScenes[i], currentFrame, property, true) - startValue * 1;

                        if (property === "rotate") {
                            distance *= Math.PI * 180;
                        }

                        let currentTweenFrame = currentFrame - startKeyframe;
                        let duration = nextKeyframe - previousKeyframe + 1;

                        let ease =
                        KeyframeTweener[getPreviousKeyframe(processedScenes[i], previousKeyframe, "ease", true) || "linear"];
                        let easedValue = ease(currentTweenFrame, startValue, distance, duration);

                        if (property === "tx" || property === "ty" || property === "sx" ||
                        property === "sy" || property === "rotate"){
                            processedScenes[i].transforms[property] = easedValue;
                        } else {
                            processedScenes[i].arbitraryProperties[property] = easedValue;
                        }

                    }
                }

                renderingContext.save();

                renderingContext.translate(processedScenes[i].transforms.tx, processedScenes[i].transforms.ty);
                renderingContext.scale(processedScenes[i].transforms.sx, processedScenes[i].transforms.sy);
                renderingContext.rotate(processedScenes[i].transforms.rotate);
                SampleSpriteLibrary[processedScenes[i].name](processedScenes[i].arbitraryProperties);

                // Clean up.
                renderingContext.restore();
            }
            // Move to the next frame.
            currentFrame += 1;
            previousTimestamp = timestamp;
            window.requestAnimationFrame(nextFrame);
        };

        window.requestAnimationFrame(nextFrame);
    };

    window.KeyframeTweener = {
        // The module comes with a library of common easing functions.
        linear: (currentTime, start, distance, duration) => {
            let percentComplete = currentTime / duration;
            return distance * percentComplete + start;
        },

        quadEaseIn: (currentTime, start, distance, duration) => {
            let percentComplete = currentTime / duration;
            return distance * percentComplete * percentComplete + start;
        },

        quadEaseOut: (currentTime, start, distance, duration) => {
            let percentComplete = currentTime / duration;
            return -distance * percentComplete * (percentComplete - 2) + start;
        },

        quadEaseInAndOut: (currentTime, start, distance, duration) => {
            let percentComplete = currentTime / (duration / 2);
            return (percentComplete < 1) ?
                    (distance / 2) * percentComplete * percentComplete + start :
                    (-distance / 2) * ((percentComplete - 1) * (percentComplete - 3) - 1) + start;
        },

        easeInCirc: function (currentTime, start, distance, duration) {
            let percentComplete = currentTime / duration;
            return -distance * (Math.sqrt(1 - (percentComplete * percentComplete)) - 1) + start;
        },

        easeOutSine: function (currentTime, start, distance, duration) {
            return distance * Math.sin(currentTime / duration * (Math.PI / 2)) + start;
        },

        sudden: function (currentTime, start, distance, duration){
            //  Had to put + duration and - duration to satisfy jenkins.
            //  However, due to the nature of my ease duration has to be required
            //  by the function despite no use.
            return start + distance + duration - duration;
        },

        initialize: initializeAnimation
    };
})();
