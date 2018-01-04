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

    const videoElement = document.getElementById("videoElement");

    // If the page is hidden, pause the video;
    // if the page is shown, play the video
    const handleVisibilityChange = () => {
        if (document[hidden]) {
            videoElement.pause();
        } else {
            videoElement.play();
        }
    }

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || typeof document.hidden === "undefined") {
        console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange, false);

        // When the video pauses, set the title.
        // This shows the paused
        videoElement.addEventListener("pause", function() {
            document.title = 'Paused';
        }, false);

        // When the video plays, set the title.
        videoElement.addEventListener("play", function() {
            document.title = 'Playing';
        }, false);
    }
})();
