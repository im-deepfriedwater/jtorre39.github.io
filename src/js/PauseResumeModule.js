(() => {

    // Adopted and inspired from:
    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API

    let hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    const bg = document.getElementById("bg");

    // If the page is hidden, pause the audio;
    // if the page is shown, play the audio (if sound is on)

    const setupPauseResume = (resumeCallback, pauseCallback) => {

        const handleVisibilityChange = () => {
            if (document[hidden]) {
                pauseCallback();
            } else {
                resumeCallback();
            }
        };

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" || typeof document.hidden === "undefined") {
            console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
        } else {
            // Handle page visibility change
            document.addEventListener(visibilityChange, handleVisibilityChange, false);

            // When focus is lost, change the title.
            bg.addEventListener("pause", function() {
                document.title = "I'll be waiting!";
            }, false);

            // When focus is back, set the title.
            bg.addEventListener("play", function() {
                document.title = 'Welcome back!';
            }, false);
        }
    };

    window.PauseResume = { setupPauseResume };
})();
