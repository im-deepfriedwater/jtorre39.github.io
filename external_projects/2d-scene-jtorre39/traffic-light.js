(() => {
    window.SampleSpriteLibrary = window.SampleSpriteLibrary || {};
    SampleSpriteLibrary.trafficLight = (config) => {
        const BASE_WIDTH = 25;
        const BASE_HEIGHT = 100;
        let renderingContext = config.renderingContext;
        let lightTopOn = config.topLightOn || '#F06067';
        let lightTopOff = config.topLightOff || '#6E2529';
        let lightMiddleOn = config.middleLightOn || '#D9DB88';
        let lightMiddleOff = config.middleLightOff || '#676941';
        let lightBottomOn = config.bottomLightOn || '#99E09B';
        let lightBottomOff = config.bottomLightOff || '#578058';
        let baseColor = config.baseColor || '#BFBFBF';
        let lightBoxColor = config.lightBoxColor || '#828282';
        let lightTopSwitch = config.lightTopSwitch || false;
        let lightMiddleSwitch = config.lightMiddleSwitch || false;
        let lightBottomSwitch = config.lightBottomSwitch || false;
        let lightX = 0;
        let lightY = 0;

        let drawBase = () => {
            let base = {x: lightX, y: lightY};
            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.fillStyle = baseColor;
            renderingContext.rect(base.x, base.y, BASE_WIDTH, BASE_HEIGHT);
            renderingContext.fill();
            renderingContext.stroke();
            renderingContext.restore();
        };

        let drawLightBox = () => {
            let offset1 = {x: 0, y: 0};
            let point1 = {x: lightX + offset1.x, y: lightY + offset1.y};
            let offset2 = {x: -5, y: -10};
            let point2 = {x: point1.x + offset2.x, y: point1.y + offset2.y};
            let offset3 = {x: 0, y: -75};
            let point3 = {x: point2.x + offset3.x, y: point2.y + offset3.y};
            let offset4 = {x: BASE_WIDTH + 10, y: 0};
            let point4 = {x: point3.x + offset4.x, y: point3.y + offset4.y};
            let offset5 = {x: 0, y: 75};
            let point5 = {x: point4.x + offset5.x, y: point4.y + offset5.y};
            let offset6 = {x: -5, y: 10};
            let point6 = {x: point5.x + offset6.x, y: point5.y + offset6.y};

            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.fillStyle = lightBoxColor;
            renderingContext.moveTo(point1.x, point1.y);
            renderingContext.lineTo(point2.x, point2.y);
            renderingContext.lineTo(point3.x, point3.y);
            renderingContext.lineTo(point4.x, point4.y);
            renderingContext.lineTo(point5.x, point5.y);
            renderingContext.lineTo(point6.x, point6.y);
            renderingContext.fill();
            renderingContext.stroke();
            renderingContext.restore();
            drawLights(point3);
        };

        let drawLights = (topLeftCorner) =>{
            let lightSize = 10;
            let distanceBetweenLights = ((lightSize * 2) + 5) * -1;
            let distanceFromTop = 15;
            let distanceFromSide = 17;
            let lightTopOffset = {x: distanceFromSide, y: distanceFromTop};
            let lightMiddleOffset = {x: 0, y: distanceBetweenLights * -1};
            let lightBottomOffset = {x: 0, y: distanceBetweenLights * -1};
            let lightTop = {x: topLeftCorner.x + lightTopOffset.x, y: topLeftCorner.y + lightTopOffset.y};
            let lightMiddle = {x: lightTop.x + lightMiddleOffset.x, y: lightTop.y + lightMiddleOffset.y};
            let lightBottom = {x: lightMiddle.x + lightBottomOffset.x, y: lightMiddle.y + lightBottomOffset.y};

            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.fillStyle = lightTopOff;
            if (lightTopSwitch){
                renderingContext.fillStyle = lightTopOn;
            }
            renderingContext.arc(lightTop.x, lightTop.y, lightSize, 0, Math.PI * 2);
            renderingContext.fill();
            renderingContext.restore();

            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.fillStyle = lightMiddleOff;
            if (lightMiddleSwitch){
                renderingContext.fillStyle = lightMiddleOn;
            }
            renderingContext.arc(lightMiddle.x, lightMiddle.y, lightSize, 0, Math.PI * 2);
            renderingContext.fill();
            renderingContext.restore();

            renderingContext.save();
            renderingContext.beginPath();
            renderingContext.fillStyle = lightBottomOff;
            if (lightBottomSwitch){
                renderingContext.fillStyle = lightBottomOn;
            }
            renderingContext.arc(lightBottom.x, lightBottom.y, lightSize, 0, Math.PI * 2);
            renderingContext.fill();
            renderingContext.restore();
        };

        let render = () => {
            drawBase();
            drawLightBox();
        };

        render();
    };
})();
