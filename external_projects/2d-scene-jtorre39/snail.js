(() => {
    window.SampleSpriteLibrary = window.SampleSpriteLibrary || {};
    SampleSpriteLibrary.snail = (config) => {
        let renderingContext = config.renderingContext;
        const snailShellColor = config.snailShellColor || '#B09361';
        const snailBodyColor = config.snailBodyColor || '#F7E3C1';
        const snailX = config.snailX || 0;
        const snailY = config.snailY || 0;
        const shellSize = config.shellSize || 23;
        let animation = config.snailAnimationOffset || 0;

        let drawSnailBody = (outline, animationOffset) => {
            const baseOffset = {x: -9, y: 20};
            let base = {x: snailX + baseOffset.x, y: snailY + baseOffset.y};
            let animOffset = animationOffset;

            const baseControlPointOffset = {x: 33, y: 35};
            const basePointOffset = {x: 43, y: 20};
            const baseControlPoint = {x: snailX + baseControlPointOffset.x + animOffset, y: snailY + basePointOffset.y};
            const basePoint = {x: snailX + basePointOffset.x + animOffset, y: snailY + basePointOffset.y};

            const neckControlPointOffset = {x: 48, y: 20};
            const neckPointOffset = {x: 47, y: -15};
            const neckControlPoint = {x: snailX + neckControlPointOffset.x + animOffset, y: snailY + neckControlPointOffset.y};
            const neckPoint = {x: snailX + neckPointOffset.x + animOffset, y: snailY + neckPointOffset.y};

            const headControlPointOffset = {x: 43, y: -25};
            const headPointOffset = {x: 38, y: -20};
            const headControlPoint = {x: snailX + headControlPointOffset.x + animOffset, y: snailY + headControlPointOffset.y};
            const headPoint = {x: snailX + headPointOffset.x + animOffset, y: snailY + headPointOffset.y};

            const backNeckControlPointOffset = {x: 28, y: -10 };
            const backNeckPointOffset = {x: 28, y: 5};
            const backNeckControlPoint = {x: snailX + backNeckControlPointOffset.x, y: snailY + backNeckControlPointOffset.y };
            const backNeckPoint = {x: snailX + backNeckPointOffset.x, y: snailY + backNeckPointOffset.y};

            renderingContext.save();
            renderingContext.fillStyle = snailBodyColor;
            renderingContext.strokeStyle = outline ? snailBodyColor : "BLACK";
            renderingContext.beginPath();
            renderingContext.moveTo(base.x, base.y);
            renderingContext.quadraticCurveTo(baseControlPoint.x, baseControlPoint.y, basePoint.x, basePoint.y);
            renderingContext.quadraticCurveTo(neckControlPoint.x, neckControlPoint.y, neckPoint.x, neckPoint.y);
            renderingContext.quadraticCurveTo(headControlPoint.x, headControlPoint.y, headPoint.x, headPoint.y);
            renderingContext.quadraticCurveTo(backNeckControlPoint.x, backNeckControlPoint.y, backNeckPoint.x, backNeckPoint.y);
            renderingContext.stroke();
            renderingContext.fill();
            renderingContext.restore();
            drawEyeStalks(headPoint.x, headPoint.y);
        };

        let drawSnailShell = (shellSize) => {
            const shellOffsetX = 10;
            const shellX = snailX + shellOffsetX;
            renderingContext.save();
            renderingContext.fillStyle = snailShellColor;
            renderingContext.beginPath();
            renderingContext.arc(shellX, snailY, shellSize, 0, Math.PI * 2, false);
            renderingContext.fill();
            renderingContext.restore();
            drawInnerCircles(shellX, shellSize);
        };

        let drawInnerCircles = (shellX, originalSize) => {
            const shrinkScale = 5;
            renderingContext.save();
            renderingContext.moveTo(shellX + originalSize - shrinkScale * 1, snailY);
            renderingContext.arc(shellX, snailY, originalSize - shrinkScale * 1, 0, Math.PI * 2, false);
            renderingContext.moveTo(shellX + originalSize - shrinkScale * 2, snailY);
            renderingContext.arc(shellX, snailY, originalSize - shrinkScale * 2, 0, Math.PI * 2, false);
            renderingContext.moveTo(shellX + originalSize - shrinkScale * 3, snailY);
            renderingContext.arc(shellX, snailY, originalSize - shrinkScale * 3, 0, Math.PI * 2, false);
            renderingContext.stroke();
            renderingContext.restore();
        };

        let drawEyeStalks = (headX, headY) => {
            let stalkLength = 8;
            let eyeStartOffset = {x: 0, y: 0};
            let eyeEndOffset = {x: -3, y: 0};
            let eyeStart = {x: headX + eyeStartOffset.x, y: headY + eyeStartOffset.y + eyeStartOffset.y};
            let eyeEnd = {x: eyeStart.x + eyeEndOffset.x, y: headY - stalkLength + eyeEndOffset.y};
            renderingContext.save();
            renderingContext.moveTo(eyeStart.x, eyeStart.y);
            renderingContext.lineTo(eyeEnd.x, eyeEnd.y);
            renderingContext.stroke();
            renderingContext.restore();
        };

        let render = () => {
            drawSnailBody(false, animation);
            drawSnailShell(shellSize);
        };

        render();
    };
})();
