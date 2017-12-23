(($) => {
    const $introContainer = $('.intro-container');
    const $music = $('.music');
    const $startSound = $('.start-sound');
    const textClass = 'intro-text';

    const exposition = [
        `You are a fierce yet savvy ace recruiter tasked with finding
        yet another young talent to add to your company's workforce.`,

        `"... Again? I just got that kid who founded like 3 different companies."`,

        `"Yes again. We have a deadline to meet and could use the extra help. Chop chop."`,

        `They'll never understand.`,

        `* Click to continue! *`
    ];

    const context = [
        `After days of searching, you feel you've done a sizeable amount of
        recruiting. Proud of living up to your very own job title as a recruiter,
        you decide to look over one more candidate before you call it a day and
        continue on with your current batch of candidates. `,
    ];

    const options = ['Sound?'];

    let settings = {};

    let index = 0;

    const init = () => {
        formatText($introContainer, exposition);
        $introContainer.click(expositionClick);
    };

    const expositionClick = () => {
        formatText($introContainer, context);
        $introContainer.click(optionsClick);
    };

    const optionsClick = () => {
        formatText($introContainer, options);
        $introContainer.click(() => {console.log('gj');});
        // TODO set up yes and no options
    };

    const finishIntro = () => {
        window.Settings = settings;
    };

    const formatText = ($element, textArray) => {
        $element.empty();
        textArray.forEach((text) => {
            $element.append($(`<p>${text}</p>`).addClass(textClass));
        });
    };

    window.Intro = {
        init
    };
})(jQuery);
