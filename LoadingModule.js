(($) => {
    const $loadingText = $('.loading-text');
    const $loadingContainer = $('.loading-container');

    let toggleLoading = () => {
        doneLoading = true;
        $loadingContainer.css({'max-height': 0})

    };

    const FRAME_RATE = 10;
    const FRAME_DURATION = 5000 / FRAME_RATE
    const MAX_DOTS = 3;
    const LOADING_TEXT = "LOADING ";

    let currentDots = 0;
    let doneLoading = false;
    let lastTimestamp;

    let animateLoading = (timestamp) => {

        if (doneLoading) {
            return;
        }

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

    let init = (options) => {
        window.requestAnimationFrame(animateLoading);

        if ($.isPlainObject(options) && $.isFunction(options.whenDoneLoading)) {
            $(window).bind("load", function() {
                toggleLoading();
                options.whenDoneLoading();
            });
        }


    }

    window.Loading = {
        init
    }

})(jQuery);
