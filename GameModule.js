(($) => {

    const Init = () => {
        if (window.Settings.sound) {
            $("#bg").trigger("play");
            
        }
    };


    window.Game = {
        Init
    }
})(jQuery)
