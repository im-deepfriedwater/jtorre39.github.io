(($) => {
    const $dialogueText = $(".dialogue-text");
    const $dialogueBox = $(".dialogue-box");
    const $portfolioOff = $("#portfolioOff");
    const $portfolioOn = $("#portfolioOn");
    const $portrait = $(".portrait");
    const $speaker = $(".speaker");
    const $topicContainer = $(".topic-container");
    const $topicList = $(".topic-list");
    const $topicTitle = $(".topic-title");
    const $selectedOverlay = $(".selected-overlay");

    const getConvo = window.Conversation.getConversation;
    const getPortfolio = window.Portfolio.getPortfolio;

    const activeClass = "topic-on";
    const activePortrait = "portrait-on";
    const activeTopicList = "topic-list-on";

    const standardTitle = "Scroll or Click Below to Hear More!"

    const topicListHeight = "42.5vh";

    const speakerKey = {
        "0": "Justin Kyle Torres",
        "1": "You",
        "2": "",
        "3": "???"
    };

    let currentConversation = "intro";
    let index = 0;

    const Init = () => {
        playSound($("#bg"), 0.07);
        // Unsure how to loop easily using jQuery.
        document.getElementById("bg").loop = true;
        setupTextBox();
        slideUp();
    };

    const slideUp = () => {
        $(".sliding-container").css("max-height", 0);
    };

    const setupTextBox = () => {
        const convo = getConvo(currentConversation, index);
        $dialogueBox.click(intro);
        intro();
        $topicList.append(generateTopics());
    };

    const intro = () => {
        const convo = getConvo(currentConversation, index);
        $speaker.text(speakerKey[convo.speaker]);
        $dialogueText.text(convo.text);

        if (convo.trigger && convo.trigger === "show-portrait") {
            $portrait.addClass(activePortrait);
        } else if (convo.trigger && convo.trigger === "portfolio-spawn") {
            spawnPortfolio();
            playSound($portfolioOn, 0.15);
        } else if (convo.end) {
            assignOnClickToTopics();
            $topicTitle.text(standardTitle);
            toggleTopicList(true);
            $dialogueBox.click(stallUntilTopic);
        }

        index = convo.end ? index : index + 1;
    };

    const stallUntilTopic = () => {

    };

    const proceed = (key) => {
        const topic = getPortfolio().find((portfolio) => portfolio.key === key);
        focusOnTopic(topic);
        resetAndBindDialogueBox(stallUntilTopic);
    };

    // For use when there is a topic which has no special events
    const dialogueFunctionGenerator = (key) => {

    };

    const convoFunctionGenerator = (key) => {
        return () => {
            proceed(key);
        };
    };

    const assignOnClickToTopics = () => {
        $(".topic").each((index, element) => {
            const $element = $(element);
            const key = $element.data("key");
            $element.click(convoFunctionGenerator(key))
        });
    };

    const focusOnTopic = (topic) => {
        toggleTopicList(false);
        $topicTitle.text("");
        $selectedOverlay.append(generateTopicHTML(topic))
        toggleFocusOverlay(true);
    };

    const unfocusOnTopic = () => {

    };

    const pauseSong = () => {

    };

    const resumeSong = () => {

    };

    const generateTopics = () => {
        const topics = getPortfolio();
        const topicRowOpener = "<div class=topic-row> \n"
        const topicRowCloser = "</div> \n"
        const topicSpacer = '<div class="topic-spacer"></div> \n';

        let generatedHTML = "";
        let currentRow = topicRowOpener;

        topics.forEach((topic, index) => {
            currentRow += generateTopicHTML(topic);
            if (index > 0 && index % 2 != 0) {
                currentRow += topicRowCloser;
                generatedHTML += currentRow;
                currentRow = topicRowOpener;
            } else {
                currentRow += topicSpacer;
            }
        });

        return generatedHTML;
    };

    const generateTopicHTML = (topic) => {
       return `<div class="topic" data-key="${topic.key}">
                   <div class="icon-wrapper lvl1">
                       <img class="topic-icon" src="${topic.img}">
                   </div>
                   <div class="topic-placard lvl1">
                        <p>${topic.title}</p>
                   </div>
               </div> \n`;
    }

    const spawnPortfolio = () => {
        $topicContainer.addClass(activeClass);
    };

    const toggleTopicList = (on) => {
        if (on) {
            $topicList.css({"display": "block"})
        } else {
            $topicList.css({"display": "none"})
        }
    };

    const toggleFocusOverlay = (on) => {
        if (on) {
            $selectedOverlay.css({"display": "block"})
        } else {
            $selectedOverlay.css({"display": "none"})
        }
    };

    const playSound = (sound, volume) => {
        if (window.Settings.sound) {
            sound
                .prop("volume", volume)
                .trigger("play");
        }
    };

    const resetAndBindDialogueBox = (callback) => {
        $dialogueBox.off('click').on('click', callback);
    };

    window.Game = {
        Init
    }
})(jQuery)
