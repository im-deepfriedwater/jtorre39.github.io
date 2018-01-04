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

        maze: {
            conversation: [
                {

                },
            ]
        },

        tweener: {
            conversation: [
                {
                    speaker: 1,
                    text: "Tell me about that turtle over there."
                },

                {
                    speaker: 0,
                    text: "That was a project meant to determine the in-between "
                        + "frames of an animation when given only the key frames."
                },

                {
                    speaker: 0,
                    text: "It was coded purely in JavaScript. It allows users to "
                        + "write and create animations entirely in JavaScript!"
                },

                {
                    speaker: 0,
                    text: "If you give it a JSON object containing a list "
                        + "of keyframes for each object."

                },

                {
                    speaker: 0,
                    text: "Additionally, the objects to animate are made using JavaScript."

                },

                {
                    speaker: 0,
                    text: "If you would like to view it in action, you can "
                        + "check out a demo animation I made using the link "
                        + "right there.",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "View Animation",
                            src: "external-projects/keyframe-tweening-demo.html"
                        }
                    ]
                },

                {
                    speaker: 2,
                    text: "Maybe I should check out the links to see what "
                        + "the kid is talking about. If not, *click to continue*",
                    trigger: "end"
                }
            ]
        },

        stall: {
            conversation: [
                {
                     speaker: 0,
                     text: "Click on any of the above items!"
                },

                {
                    speaker: 0,
                    text: "Oh, there's nothing here. Click up in that fancy "
                    + "box I made."
                },

                {
                    speaker: 0,
                    text: "Oh sorry, up there not here!"
                },

                {
                    speaker: 0,
                    text: "Ahh... haha... there's a fancy screen with your "
                        + "clicking device's name on it! Please?"
                },

                {
                    speaker: 0,
                    text: "*cough*"
                },

                {
                    speaker: 0,
                    text: "(Hmm, this is going as bad as I thought it would be. "
                        + "Maybe I should've practiced in front of my mirror a few "
                        + "more times.)"
                },

                {
                    speaker: 0,
                    text: "Oh did you need help deciding what to click? "
                        + "Try clicking that small turtle. It actually has "
                        + "a lot to show you. (Unlike me, until you click something!)"
                },

                {
                    speaker: 0,
                    text: "(Is... this just a thing? Is this some sort of recruiter"
                        + "tactic?)"
                },

                {
                    speaker: 0,
                    text: "Wowowow you're probably super close to an achievement with "
                        + "how much you've clicked down here!"
                },

                {
                    speaker: 0,
                    text: "ACHIEVEMENT UNCLOCKED: INFINTIMUS CLICKIMUS"
                },

                {
                    speaker: 0,
                    text: "I'm so happy for you! Your reward is the ability "
                        + "to click above on any of those projects! You seemingly "
                        + "lacked this ability before!"
                },

                {
                    speaker: 0,
                    text: "You excitedly try out your newfound ability and click "
                        + "one of the projects above! Maybe the turtle one."
                },

                {
                    speaker: 0,
                    text: "Ahaha... I've kind of run out of things to say. "
                        + "I would love to talk more but then it would ruin "
                        + "the nice portfolio I prepared for you above."
                },

                {
                    speaker: 0,
                    text: "Well, if they don't know what you're saying, run it "
                        + "one more time! I think I can repeat everything I've just said.",
                },

                {
                    speaker: 0,
                    text: "Scroll or click any of the topics to hear more!",
                    trigger: "repeat"
                },
            ]
        }
    };

    const getConversation = (key, index) => {
        return ConversationDatabase[key].conversation[index]
    };
    window.Conversation = { getConversation };
})();
