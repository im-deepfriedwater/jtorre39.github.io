(($) => {
    const $loadingText = $('.loading-text');
    const $loadingContainer = $('.sliding-container');


    let toggleLoading = (options) => {
        $loadingText.text('');
        if ($.isPlainObject(options) && $.isFunction(options.whenDoneLoading)) {
            options.whenDoneLoading();
        }
    };

    const FRAME_RATE = 10;
    const FRAME_DURATION = 5000 / FRAME_RATE
    const MAX_DOTS = 3;
    const LOADING_TEXT = "LOADING ";
    const MINIUMUM_DURATION = 4000;

    let currentDots = 0;
    let doneLoading = false;
    let currentTime = 0;
    let userOptions;
    let lastTimestamp;

    let animateLoading = (timestamp) => {
        if (doneLoading && currentTime > MINIUMUM_DURATION) {
            toggleLoading(userOptions);
            return;
        }

        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        let delta = timestamp - lastTimestamp;

        if (delta < FRAME_DURATION) {
            window.requestAnimationFrame(animateLoading);
            return;
        }

        let dotsString = "";

        currentTime += delta;

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

        $(window).bind("load", function() {
            doneLoading = true;
        });

        userOptions = options;
    };

    window.Loading = {
        init
    }

})(jQuery);
