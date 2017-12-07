(() => {
    let canvas = document.getElementById("canvas");
    let renderingContext = canvas.getContext("2d");
    let groundPlane = 400;

    let snail = {x: 20, y: groundPlane + -20};
    let snailSpeedScale = 3;

    let turtle = {x: 120, y: groundPlane + -15};
    let snailSign = 1;
    let frontLegsSign = 1;
    let backLegsSign = -1;
    let tailSign = 1;

    let blink = false;
    let blinkCounter = 0;
    let blinkLimit = 300;

    let frontLegsAnimationOffset = 0;
    let backLegsAnimationOffset = 0;
    let tailAnimationOffset = 0;
    let snailAnimationOffset = 0;

    let currentLight = 0;
    let lightTopSwitch = false;
    let lightMiddleSwitch = false;
    let lightBottomSwitch = false;
    let lightCounter = 0;
    let lightX = 450;
    let lightY = groundPlane - 100;

    const FRAME_DURATION = 30; // In milliseconds.

    let lastTimestamp = 0;
    let drawFrame = (timestamp) => {
        lastTimestamp = lastTimestamp || timestamp;
        if (timestamp - lastTimestamp < FRAME_DURATION) {
            window.requestAnimationFrame(drawFrame);
            return;
        }

        lastTimestamp = timestamp;
        renderingContext.clearRect(0, 0, canvas.width, canvas.height);
        renderingContext.save();
        renderingContext.beginPath();
        renderingContext.moveTo(0, groundPlane);
        renderingContext.lineTo(canvas.width, groundPlane);
        renderingContext.stroke();
        renderingContext.restore();

        renderingContext.save();
        renderingContext.translate(lightX, lightY);
        SampleSpriteLibrary.trafficLight({
            renderingContext,
            lightTopSwitch,
            lightMiddleSwitch,
            lightBottomSwitch,
        });
        renderingContext.restore();
        renderingContext.save();
        renderingContext.translate(turtle.x, turtle.y);
        SampleSpriteLibrary.turtle({
            renderingContext,
            frontLegsAnimationOffset,
            backLegsAnimationOffset,
            tailAnimationOffset,
            blink
        });
        renderingContext.restore();

        renderingContext.save();
        renderingContext.translate(snail.x, snail.y);
        SampleSpriteLibrary.snail({
            renderingContext,
            snailAnimationOffset
        });

        renderingContext.restore();

        if (!lightTopSwitch){
            // magic numbered snail animation code
            snail.x += .2 * snailSpeedScale;
            if (snail.x > canvas.width + 20) {
                snail.x = -20;
            }
            snailAnimationOffset += .1 * snailSign * snailSpeedScale;
            if (snailAnimationOffset >= 10 || snailAnimationOffset <= 0){
                snailSign *= -1;
            }

            // magic numbered turtle animation code
            turtle.x += .45;
            if (turtle.x > canvas.width + 75){
                turtle.x = -100;
            }

            frontLegsAnimationOffset += .15 * frontLegsSign;
            backLegsAnimationOffset += .15 * backLegsSign;
            tailAnimationOffset += .18 * tailSign;

            if (frontLegsAnimationOffset >= 10 || frontLegsAnimationOffset <= 0){
                frontLegsSign *= -1;
            }

            if (backLegsAnimationOffset <= -10 || backLegsAnimationOffset >= 0){
                backLegsSign *= -1;
            }

            if (tailAnimationOffset >= 10 || tailAnimationOffset <= 0){
                tailSign *= -1;
            }

            blinkCounter += 1;
            if (blinkCounter > blinkLimit && !blink){
                blink = true;
                blinkCounter = 0;
            }

            if (blinkCounter > 75 && blink){
                blink = false;
                blinkCounter = 0;
            }
        }

        // magic number naive animation for trafficlight
        lightCounter += 1;

        if (lightCounter > 300){
            lightCounter = 0;
            currentLight += 1;
        }

        if (currentLight > 2){
            currentLight = 0;
        }

        if (currentLight === 0){
            lightTopSwitch = false;
            lightMiddleSwitch = false;
            lightBottomSwitch = true;
        } else if (currentLight === 1){
            lightTopSwitch = false;
            lightMiddleSwitch = true;
            lightBottomSwitch = false;
        } else if (currentLight === 2){
            lightTopSwitch = true;
            lightMiddleSwitch = false;
            lightBottomSwitch = false;
        }

        window.requestAnimationFrame(drawFrame);
    };
    window.requestAnimationFrame(drawFrame);
})();
