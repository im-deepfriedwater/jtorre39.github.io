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
                    speaker: 1,
                    text: `What's this "Maze Builder Web App?"`
                },

                {
                    speaker: 0,
                    text: "Written using JavaScript and jQuery, "
                        + "it is meant for devices with touch and accelormeters."
                },

                {
                    speaker: 0,
                    text: "It lets you draw walls using touch and you can "
                        + "tilt the device to control the balls. Walls can be "
                        + "moved after being placed."

                },

                {
                    speaker: 0,
                    text: "Also any existing wall can be deleted by dragging "
                        + "the wall outside the bounds."

                },

                {
                    speaker: 0,
                    text: "The purpose of this project was to work with "
                        + "a direct manipulation sort of UI. It was a great "
                        +"interacion design exercise."
                },

                {
                    speaker: 0,
                    text: "If you have a touch screen device right now..."
                },

                {
                    speaker: 0,
                    text: "... you can visit the link above to try it out! ",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "Try the App!",
                            src: "../../external_projects/direct-manipulation-jtorre39/maze_builder.html"
                        }
                    ]
                },

                {
                    speaker: 2,
                    text: "You consider trying the app. You build excellent "
                        + "mazes you suspect. If not, click to continue."
                },

                {
                    speaker: 1,
                    text: "Alright, it would take too long for the masses to solve my "
                        + "mazes. Let's move on.",
                    trigger: "end"
                },


            ]
        },

        grnmap: {
            conversation: [
                {
                    speaker: 1,
                    text: `What's this "Maze Builder Web App?"`
                },

                {
                    speaker: 0,
                    text: `What's this "Maze Builder Web App?"`
                },
            ]
        },

        pluvio: {
            conversation: [
                {
                    speaker: 1,
                    text: `What's this "Maze Builder Web App?"`
                },

                {
                    speaker: 0,
                    text: `What's this "Maze Builder Web App?"`
                },
            ]
        },

        website: {
            conversation: [
                {
                    speaker: 1,
                    text: `What's this "Maze Builder Web App?"`
                },

                {
                    speaker: 0,
                    text: `What's this "Maze Builder Web App?"`
                },
            ]
        },

        self: {
            conversation: [
                {
                    speaker: 1,
                    text: "Why don't you tell me more about yourself?"
                },

                {
                    speaker: 0,
                    text: `Never thought you'd ask!`,
                    trigger: "end"
                },
            ]
        },

        oxtails: {
            conversation: [
                {
                    speaker: 1,
                    text: `What's this "Maze Builder Web App?"`
                },

                {
                    speaker: 0,
                    text: `What's this "Maze Builder Web App?"`
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
                    text: "You merely need to give it a JSON file that contains "
                        + "a list of keyframes. It does everything else for you."

                },

                {
                    speaker: 0,
                    text: "Additionally, the objects to animate are made using JavaScript."

                },

                {
                    speaker: 0,
                    text: "I believe the art can speak for itself. You can "
                        + "check out a demo animation I made using the link "
                        + "right there.",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "View Animation",
                            src: "../../external_projects/2d-scene-jtorre39/keyframe-tweening-demo.html"
                        }
                    ]
                },

                {
                    speaker: 2,
                    text: "Maybe I should check out the links to see what "
                        + "the kid is talking about. If not, *click to continue*",
                },

                {
                    speaker: 1,
                    text: "Let's move on.",
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
                    text: "(Hmm, this is going as bad as I thought it would. "
                        + "I should've rehearsed a few more times.) "
                },

                {
                    speaker: 0,
                    text: "Did you need help deciding what to click? "
                        + "Maybe that small turtle. It has tons to show you. "
                },

                {
                    speaker: 0,
                    text: "(Is... this just a thing? Is this some sort of recruiter "
                        + "tactic?)"
                },

                {
                    speaker: 0,
                    text: "Wowowow you're probably super close to an achievement with "
                        + "how much you've clicked down here!"
                },

                {
                    speaker: 0,
                    text: "ACHIEVEMENT UNLOCKED: INFINTIMUS CLICKIMUS",
                    trigger: "alert",
                    alert: "ACHIEVEMENT UNLOCKED: INFINTIMUS CLICKIMUS"
                },

                {
                    speaker: 0,
                    text: "Your reward is the ability to click anything above in the "
                        + "portfolio! You seemingly lacked this ability before!"

                },

                {
                    speaker: 0,
                    text: "You excitedly try out your newfound ability and click "
                        + "one of the projects above! Like the turtle one."
                },

                {
                    speaker: 0,
                    text: "Ahaha... I've run out of things to say. "
                        + "I would love to talk more but it would waste this fancy "
                        + "portfolio."

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
