(() => {

    // Speaker Key
    // 3 = ???
    // 2 = narrator
    // 1 = recruiter
    // 0 = Justin Kyle Torres

    const ConversationDatabase = {
        intro: {
            conversation: [{
                    speaker: 2,
                    text: "As you get ready to leave, you feel a "
                        + "slight disturbance staring at you from the side."
                        + "*Click to Continue*"
                },

                {
                    speaker: 1,
                    text: "...Hm? May I help you?"
                },

                {
                    speaker: 3,
                    text: "!",
                    trigger: "show-portrait"

                },

                {
                    speaker: 2,
                    text: "You notice the source of this disturbance take a deep breath."
                },

                {
                    speaker: 3,
                    text: "Hello! My name is Justin Kyle Torres! I was told you handle recruiting?"
                },

                {
                    speaker: 1,
                    text: "Yes. But I'm sure this can be handled by someone "
                        + "else. Here take my coworker's business card an-"
                },

                {
                    speaker: 0,
                    text: "Uhm- wait! I was told you're the BEST at recruiting. Aren't you?"
                },

                {
                    speaker: 1,
                    text: "... Now who said that?"
                },

                {
                    speaker: 2,
                    text: "You feel your ego appeased."
                },

                {
                    speaker: 1,
                    text: "Well... okay. I can spare 5 minutes."
                },

                {
                    speaker: 0,
                    text: "Ahh! Thank you so much! Let me continue the introduction."
                },

                {
                    speaker: 0,
                    text: "I'm a Junior pursuing a degree in Computer Science at "
                           + "Loyola Marymount University."
                },

                {
                    speaker: 0,
                    text: "I believe I'd be an excellent candidate for your "
                            + "software engineering internship position."
                },

                {
                    speaker: 0,
                    text: "I'd like to demonstrate that using my very own portfolio."
                },

                {
                    speaker: 2,
                    text: "Suddenly, you see a screen appear before you!",
                    trigger: "portfolio-spawn"
                },

                {
                    speaker: 1,
                    text: "Huh. Wow."
                },

                {
                    speaker: 0,
                    text: "Scroll or click any of the topics to hear more!",
                    end: true
                }
            ]
        },

        tweener: {
            conversation: [
                {

                },
            ]
        },

        maze: {
            conversation: [
                {

                },
            ]
        },



    };

    const getConversation = (key, index) => {
        return ConversationDatabase[key].conversation[index]
    };
    window.Conversation = { getConversation };
})();
