(() => {
    window.SampleSpriteLibrary = window.SampleSpriteLibrary || {};
    SampleSpriteLibrary.turtle = (config) => {
        const SHELL_SIZE = 50;
        const HEAD_SIZE = 20;
        const LEG_WIDTH = 20;
        const LEG_HEIGHT = 20;
        const DISTANCE_BETWEEN_LEGS = 60;
        let renderingContext = config.renderingContext;
        let turtleShellColor = config.turtleShellColor || '#458A2D';
        let turtleBodyColor = config.turtleBodyColor || '#A1D490';
        let turtleBackLegColor = config.backLegColor || '#6D9161';
        let turtle = {x: config.turtleX || 0, y: config.turtleY || 0};
        let blink = config.blink || false;
        let frontLegsAnimationOffset = config.frontLegsAnimationOffset || 0;
        let backLegsAnimationOffset = config.backLegsAnimationOffset || 0;
        let tailAnimationOffset = config.tailAnimationOffset || 0;

        let drawShell = () => {
            renderingContext.fillStyle = turtleShellColor;
            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.arc(turtle.x, turtle.y, SHELL_SIZE, 0, Math.PI, true);
            renderingContext.lineTo(turtle.x + SHELL_SIZE, turtle.y);
            renderingContext.fill();
            renderingContext.stroke();
            renderingContext.restore();
        };

        let drawFrontLegs = () => {
            renderingContext.fillStyle = turtleBodyColor;
            renderingContext.save();
            let animationOffset = frontLegsAnimationOffset;
            let leftFrontLegOffset = {x: -45, y: -5};
            let rightFrontLegOffset = {x: leftFrontLegOffset.x + DISTANCE_BETWEEN_LEGS, y: leftFrontLegOffset.y};
            let leftFront = {x: turtle.x + leftFrontLegOffset.x, y: turtle.y + leftFrontLegOffset.y};
            let rightFront = {x: turtle.x + rightFrontLegOffset.x, y: turtle.y + rightFrontLegOffset.y};
            renderingContext.beginPath();
            renderingContext.fillRect(leftFront.x + animationOffset, leftFront.y, LEG_WIDTH, LEG_HEIGHT);
            renderingContext.fillRect(rightFront.x + animationOffset, rightFront.y, LEG_WIDTH, LEG_HEIGHT);
            renderingContext.fill();
            renderingContext.stroke();
            renderingContext.restore();
        };

        let drawBackLegs = () => {
            renderingContext.fillStyle = turtleBackLegColor;
            renderingContext.save();
            let animationOffset = backLegsAnimationOffset;
            let leftBackLegOffset = {x: -35, y: -5};
            let rightBackLegOffset = {x: leftBackLegOffset.x + DISTANCE_BETWEEN_LEGS, y: leftBackLegOffset.y};
            let leftBack = {x: turtle.x + leftBackLegOffset.x, y: turtle.y + leftBackLegOffset.y};
            let rightBack = {x: turtle.x + rightBackLegOffset.x, y: turtle.y + rightBackLegOffset.y};
            renderingContext.beginPath();
            renderingContext.fillRect(leftBack.x + animationOffset, leftBack.y, LEG_WIDTH, LEG_HEIGHT);
            renderingContext.fillRect(rightBack.x + animationOffset, rightBack.y, LEG_WIDTH, LEG_HEIGHT);
            renderingContext.fill();
            renderingContext.stroke();
            renderingContext.restore();
        };

        let drawTail = () => {
            renderingContext.fillStyle = turtleBodyColor;
            renderingContext.save();
            let tailLength = 6;
            let tailOffset = {x: -40, y: -10};
            let tailPoint1 = {x: turtle.x + tailOffset.x, y: turtle.y + tailOffset.y};
            let tailPoint2Offset = {x: -20, y: tailLength};
            let tailPoint2 = {x: tailPoint1.x + tailPoint2Offset.x, y: tailPoint1.y + tailPoint2Offset.y};
            let tailPoint3 = {x: tailPoint1.x, y: tailPoint2.y};
            renderingContext.beginPath();
            renderingContext.moveTo(tailPoint1.x, tailPoint1.y);
            renderingContext.lineTo(tailPoint2.x, tailPoint2.y + tailAnimationOffset);
            renderingContext.lineTo(tailPoint3.x, tailPoint3.y);
            renderingContext.lineTo(tailPoint1.x, tailPoint1.y);
            renderingContext.stroke();
            renderingContext.fill();
            renderingContext.restore();
        };

        let drawHead = (backNeckEnd) => {
            let headOffset = {x: 15, y: -1};
            let head = {x: backNeckEnd.x + headOffset.x, y: backNeckEnd.y + headOffset.y};
            renderingContext.save();
            renderingContext.fillStyle = turtleBodyColor;
            renderingContext.beginPath();
            renderingContext.arc(head.x, head.y, HEAD_SIZE, 0, Math.PI * 2, false);
            renderingContext.fill();
            renderingContext.restore();
            drawEye(head);

        };

        let drawEye = (head) => {
            let eyeSize = 2;
            let blinkSize = 5;
            let eyeOffset = {x: 10, y: -0};
            let blinkOffset = {x: 7, y: 0};
            let eye = {x: head.x + eyeOffset.x, y: head.y + eyeOffset.y};
            let blinkStart = {x: head.x + blinkOffset.x, y: head.y + blinkOffset.y};
            let blinkEnd = {x: blinkStart.x + blinkSize, y: blinkStart.y};
            renderingContext.save();
            renderingContext.fillStyle = "#000000";
            renderingContext.beginPath();
            if (blink){
                renderingContext.moveTo(blinkStart.x, blinkStart.y);
                renderingContext.lineTo(blinkEnd.x, blinkEnd.y);
                renderingContext.stroke();
            } else {
                renderingContext.moveTo(eye.x, eye.y);
                renderingContext.arc(eye.x, eye.y, eyeSize, 0, Math.PI * 2, false);
                renderingContext.fill();
            }
            renderingContext.restore();
        };

        let drawNeckThenHead = () => {
            let neckLength = 10;
            let neckThickness = 10;
            let neckOffset = {x: 50, y: -10};
            let neckStart = {x: turtle.x + neckOffset.x, y: turtle.y + neckOffset.y};
            let neckOffsetEnd = {x: 10, y: neckLength * -1};
            let neckEnd = {x: neckStart.x + neckOffsetEnd.x, y: neckStart.y + neckOffsetEnd.y};
            let backNeckStartOffset = {x: -10, y: neckThickness * -1};
            let backNeckStart = {x: neckStart.x + backNeckStartOffset.x, y: neckStart.y + backNeckStartOffset.y};
            let backNeckEndOffset = {x: 10, y: neckLength * -1};
            let backNeckEnd = {x: backNeckStart.x + backNeckEndOffset.x, y: backNeckStart.y + backNeckEndOffset.y};
            renderingContext.fillStyle = turtleBodyColor;
            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.moveTo(neckStart.x, neckStart.y);
            renderingContext.lineTo(neckEnd.x, neckEnd.y);
            renderingContext.lineTo(backNeckEnd.x, backNeckEnd.y);
            renderingContext.lineTo(backNeckStart.x, backNeckStart.y);
            renderingContext.fill();
            renderingContext.restore();
            drawHead(backNeckEnd);
        };

        let render = () => {
            drawBackLegs();
            drawTail();
            drawFrontLegs();
            drawNeckThenHead();
            drawShell();
        };

        render();
    };
})();
