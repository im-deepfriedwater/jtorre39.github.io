(($) => {
    const $introContainer = $(".intro-text-container");
    const $externalContainer = $(".external-link-container");

    const optionClass = "options-text";
    const textClass = "intro-text";
    const activeClass ="active-external lvl1";

    let userOptions;

    const exposition = [
        `You are a fierce yet savvy ace recruiter tasked with finding
        but another young talent to add to your company's workforce.`,

        `"... Again? I just got that kid who founded like 3 different companies."`,

        `"Yes again. We have a deadline to meet and could use the extra help. Chop chop."`,

        `They'll never understand.`,

        `* Click to continue! *`
    ];

    const context = [
        `After days of searching, you feel you've done a sizeable amount of
        recruiting. Proud of living up to your own title as a recruiter,
        you decide to look over one more candidate before you call it a day and
        revel in your talented ability to recruit only the best people.`,

        `* Click to continue! *`
    ];

    const notices =
        [`For those strapped on time, you may click the box below to take you
        to a more traditional portfolio experience. However, it will affect
        the overall ending. (Just kidding!) To continue on anyway and get
        the good ending, click anywhere on this paragraph.`];

    const options = ['Sound?'];

    let settings = {};

    const init = (options) => {
        formatText(exposition);
        $introContainer.click(expositionClick);
        userOptions = options;
    };

    const expositionClick = () => {
        formatText(context);
        $introContainer.click(noticesClick);
    };

    const noticesClick = () => {
        const portfolioString = "For a more typical website format, click me!";
        const portfolioText = "portfolio-text";
        const linkToPortfolio = "/AlternateIndex.html";

        formatText(notices);
        $introContainer.click(optionsClick);
        $externalContainer.append(
            $(`<a>${portfolioString}</a>`)
                .attr("href", linkToPortfolio)
                .addClass(portfolioText)
        );

        $externalContainer.addClass(activeClass);
    };

    const optionsClick = () => {
        $externalContainer.empty();
        $externalContainer.removeClass(activeClass);

        formatText(options);

        $externalContainer.append(
            $("<div>On</div>")
                .addClass(optionClass)
                .click(finishIntroOn)
            ,

            $("<div>Off</div>")
                .addClass(optionClass)
                .click(finishIntroOff)
        );
    };

    const finishIntroOn = () => {
        finishIntro(true);
    };

    const finishIntroOff = () => {
        finishIntro(false);
    };

    const finishIntro = (value) => {
        window.Settings = {
            "sound": value
        }

        if (value) {
            $("#confirmationNoise")
                .prop("volume", 0.07)
                .trigger("play");
        }

        $introContainer.empty();
        $externalContainer.empty();
        userOptions.Init();
    };

    const formatText = (textArray) => {
        let result = "";
        $introContainer.empty();
        textArray.forEach((text) => {
            result += `<p class=${textClass}>${text}</p>`;
        });

        $introContainer.append(result);
    };

    window.Intro = {
        init
    };
})(jQuery);
