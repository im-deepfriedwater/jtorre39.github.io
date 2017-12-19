(($) => {
    const $loadingText = $('.loading-text');

    $(window).bind("load", function() {
       // doneLoading = true;
    });

    let toggleLoading = () => {

    };

    const FRAME_RATE = 10;
    const FRAME_DURATION = 5000 / FRAME_RATE
    const MAX_DOTS = 3;
    const LOADING_TEXT = "LOADING ";

    let currentDots = 0;
    let doneLoading = false;
    let lastTimestamp;

    let animateLoading = (timestamp) => {

        if (!lastTimestamp) {
           lastTimestamp = timestamp;
        }

        if (timestamp - lastTimestamp < FRAME_DURATION) {
            window.requestAnimationFrame(animateLoading);
            return;
        }

        let dotsString = "";

        if (currentDots > MAX_DOTS) {
            currentDots = 0;
        }

        for (let i = 0; i < currentDots; i++) {
            dotsString += ".";
        }

        $loadingText.text(LOADING_TEXT + dotsString);

        currentDots++;
        lastTimestamp = timestamp;
        window.requestAnimationFrame(animateLoading);
    };

    let init = () => {
        window.requestAnimationFrame(animateLoading);
    }

    window.Loading = {
        init
    }

})(jQuery);
