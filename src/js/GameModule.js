(($) => {
    const $dialogueText = $(".dialogue-text");
    const $dialogueBox = $(".dialogue-box");
    const $portfolioOff = $("#portfolioOff");
    const $portfolioOn = $("#portfolioOn");
    const $portrait = $(".portrait");
    const $speaker = $(".speaker");
    const $topicContainer = $(".topic-container");

    const getConvo = window.Conversation.getConversation;

    const activeClass = "topic-on";
    const activePortrait = "portrait-on";

    const speakerKey = {
        "0": "Justin Kyle Torres",
        "1": "You",
        "2": "",
        "3": "???"
    };

    let currentConversation = "intro";
    let index = 0;

    const Init = () => {
        if (window.Settings.sound) {
            $("#bg")
                .prop("volume", 0.07)
                .trigger("play");
        }

        document.getElementById("bg").loop = true;
        setupTextBox();
        slideUp();
    };

    const slideUp = () => {
        $(".sliding-container").css("max-height", 0);
    };

    const setupTextBox = () => {
        const convo = getConvo(currentConversation, index);
        $speaker.text(speakerKey[convo.speaker]);
        $dialogueText.text(convo.text);
        $dialogueBox.click(intro);
    };

    const intro = () => {
        index++;
        const convo = getConvo(currentConversation, index);
        $speaker.text(speakerKey[convo.speaker]);
        $dialogueText.text(convo.text);

        if (convo.trigger && convo.trigger === "show-portrait") {
            $portrait.addClass(activePortrait);
        } else if (convo.trigger && convo.trigger === "portfolio-spawn") {
            spawnPortfolio();
            $portfolioOn
                .prop("volume", 0.15)
                .trigger("play");

        } else if (convo.end) {
            $dialogueBox.click(proceed);
        }
    };

    const proceed = () => {

    };

    const generatePortfolio = () => {

    };

    const spawnPortfolio = () => {
        $topicContainer.addClass(activeClass);
    };

    window.Game = {
        Init
    }
})(jQuery)
