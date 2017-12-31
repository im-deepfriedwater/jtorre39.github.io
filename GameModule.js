(($) => {

    const Init = () => {
        if (window.Settings.sound) {
            $("#bg")
                .prop("volume", 0.07)
                .trigger("play");
        }

        document.getElementById("bg").loop = true; 

        slideUp();
    };

    const slideUp = () => {
        $(".sliding-container").css("max-height", 0);
    };

    window.Game = {
        Init
    }
})(jQuery)
