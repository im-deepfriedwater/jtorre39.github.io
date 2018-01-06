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
                    text: "As you get ready to leave, you feel a " +
                        "slight disturbance staring at you from the side." +
                        "*Click to Continue*"
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
                    text: "Yes. But I'm sure this can be handled by someone " +
                        "else. Here take my coworker's business card an-"
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
                    text: "I'm a Junior pursuing a degree in Computer Science at " +
                           "Loyola Marymount University."
                },

                {
                    speaker: 0,
                    text: "I believe I'd be an excellent candidate for your " +
                            "software engineering internship position."
                },

                {
                    speaker: 0,
                    text: "I'd like to demonstrate that using my very own portfolio."
                },

                {
                    speaker: 2,
                    text: "Suddenly, you see a screen appear before you! \n" +
                        "*Click here to continue*",
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
                    text: `What's this "Maze Builder Web App"?`
                },

                {
                    speaker: 0,
                    text: "Written using JavaScript and jQuery, " +
                        "it is meant for devices with touch and accelormeters."
                },

                {
                    speaker: 0,
                    text: "It lets you draw walls and " +
                        "tilt the device to control the balls. Walls can be " +
                        "moved after being placed."

                },

                {
                    speaker: 0,
                    text: "Also any existing wall can be deleted by dragging "
                        + "the wall outside the bounds."

                },

                {
                    speaker: 0,
                    text: "The purpose of this project was to work with " +
                        "a direct manipulation sort of UI. It was a great " +
                        "interacion design exercise."
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
                    text: "You consider trying the app. You build excellent " +
                        "mazes you suspect. If not, click to continue."
                },

                {
                    speaker: 1,
                    text: "Alright, it would take too long for the masses to solve my " +
                        "mazes. Let's move on.",
                    trigger: "end"
                },
            ]
        },

        grnmap: {
            conversation: [
                {
                    speaker: 1,
                    text: 'Tell me about your "GRNmap Research" and your role on it.'
                },

                {
                    speaker: 0,
                    text: "GRNmap is a software package written in MATLAB meant " +
                        "for modeling the dynamics of GRNs."
                },

                {
                    speaker: 0,
                    text: "It is a research project I work on at university. " +
                        "I've been on it for about a year and a half."
                },

                {
                    speaker: 1,
                    text: "A GRN?"
                },

                {
                    speaker: 0,
                    text: "GRN stands for gene regulatory network, and it " +
                        "describes gene expressions over time."
                },

                {
                    speaker: 1,
                    text: "Genes bring me back to high school biology. This sounds " +
                        "like a complicated project."
                },

                {
                    speaker: 0,
                    text: "We collaborate with professors " +
                        "across three different disciplines to work on this project."
                },

                {
                    speaker: 0,
                    text: "The icon up there is GRNsight's, a sister project. " +
                        "They work on visualization using GRNmap's output."
                },

                {
                    speaker: 1,
                    text: "So one of the keywords for this project is collaboration."
                },

                {
                    speaker: 0,
                    text: "Yes! That's right. There's a lot of communication and " +
                        "cross-discipline work that happens here."
                },

                {
                    speaker: 0,
                    text: "My role is not unlike that of a software engineer. I come in " +
                        "for weekly meetings, then I work on the tasks for the week."
                },

                {
                    speaker: 0,
                    text: "My time on the project has encompassed a code refactorization, " +
                        "updating an integral data structure to account for missing values, "
                },


                {
                    speaker: 0,
                    text: "implemented new features, fixed bugs, all the while maintaining " +
                        "and improving the existing test suite."
                },

                {
                    speaker: 1,
                    text: "So you did all this in MATLAB? We unfortunately do not work with MATLAB here."
                },

                {
                    speaker: 0,
                    text: "I'm a firm believer that for a computer scientist, " +
                        "programming languages are but a tool in our tool box."
                },

                {
                    speaker: 0,
                    text: "General concepts and paradigms are across all programming " +
                        "languages. The experience I have while working on GRNmap " +
                        "transfers to any other software engineering. "
                },

                {
                    speaker: 1,
                    text: "Well said."
                },

                {
                    speaker: 0,
                    text: "I recently presented a poster on this project at " +
                       "an academic conference known as SCCUR 2017. You can also " +
                       "view the website and GitHub up above!",

                    trigger: "spawn-links",
                    links: [

                        {
                            title: "View Website",
                            src: "http://kdahlquist.github.io/GRNmap/index.html"
                        },

                        {
                            title: "Github Repository",
                            src: "https://github.com/kdahlquist/GRNmap"
                        }
                    ]
                },
            ]
        },

        pluvio: {
            conversation: [
                {
                    speaker: 1,
                    text: "Could you speak about... pluv-io?"
                },

                {
                    speaker: 0,
                    text: "It's short for pluviophile which describes someone " +
                        "who loves rain! It's the next project I plan to work on."
                },

                {
                    speaker: 0,
                    text: "Pluvio is an ambient rain noise mobile app for Android! " +
                        "It will be written using C# and the Xamarin framework."
                },

                {
                    speaker: 1,
                    text: "There has to be a couple of ambient rain noise apps " +
                        "on the market. What makes Pluvio different?"
                },

                {
                    speaker: 0,
                    text: "From experience there's a few features missing from " +
                        "those. I decided to take matters into my own hands."
                },

                {
                    speaker: 0,
                    text: "It will also be a great learning experience for me to work " +
                        "with the Xamarin framework for the first time."
                },

                {
                    speaker: 0,
                    text: "I hope to have something to show for it sometime soon!"
                },

                {
                    speaker: 1,
                    text: "Maybe I'll check it out when you're done with it.",
                    trigger: "end"
                },
            ]
        },

        website: {
            conversation: [
                {
                    speaker: 1,
                    text: "Speak to me about this portfolio you've made in front " +
                        "of me."
                },

                {
                    speaker: 0,
                    text: "A friend of mine convinced me to buy the domain for my " +
                        "name. I would work on a website for it every once in a while."
                },

                {
                    speaker: 0,
                    text: "But I kept hitting a wall. I had a generic design that " +
                        "wasn't particularly inspiring or unique."
                },

                {
                    speaker: 0,
                    text: "So I committed my next break to working on a website " +
                        "that accurately captured me."
                },

                {
                    speaker: 0,
                    text: "Over a two week break from school, I wrote this website " +
                        "using JavaScript, jQuery, HTML, and CSS. "
                },

                {
                    speaker: 0,
                    text: "Video games are a big part of my life, so I decided " +
                        "to encompass that literally in my website portfolio."
                },

                {
                    speaker: 2,
                    text: "You have a brief moment of existentialism."
                },

                {
                    speaker: 2,
                    text: " You wonder what if you were merely nothing but a " +
                        "component in some student's website portfolio."
                },

                {
                    speaker: 1,
                    text: "(... There's no way. I'm such a great recruiter. It's " +
                        "impossible to capture that in some interactive portfolio.)"
                },

                {
                    speaker: 0,
                    text: "You can view the GitHub repository and also I blog " +
                        "I wrote about the making of this site at the links above!",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "GitHub Repository",
                            src: "https://github.com/jtorre39/jtorre39.github.io"
                        },

                        {
                            title: "Blog",
                            src: "https://medium.com/@justintorres56/the-making-of-an-interactive-portfolio-experience-1c297775d12e"
                        },
                    ]
                },

                {
                    speaker: 2,
                    text: "If you are done viewing the links, click here to continue. " +
                        "Or you may continue spacing out."
                },

                {
                    speaker: 1,
                    text: "A-ah. Most interesting. Let's continue.",
                    trigger: "end"
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
                    text: "Yeah sure! Well first I grew up on video games. Video games even " +
                        "led me to start studying computer science."
                },

                {
                    speaker: 0,
                    text: "A few years later, I've come out with a passion for " +
                        "computer science I wasn't expecting to have."
                },

                {
                    speaker: 0,
                    text: "Along the way I've had experiences that fostered " +
                        "a strong sense of collaboration and communication in me."
                },

                {
                    speaker: 0,
                    text: "The opportunity to create something in this day and age " +
                        "with a team of other creative and passionate people- "
                },

                {
                    speaker: 0,
                    text: "That is something I savor and hope to have in my career."
                },

                {
                    speaker: 1,
                    text: "Is your career interest making video games?"
                },

                {
                    speaker: 0,
                    text: "Oh I would love to work on a video game."
                },

                {
                    speaker: 0,
                    text: "But I've realized software engineering would be just as "
                        + "challenging and rewarding to do as well. "
                },

                {
                    speaker: 0,
                    text: "I'm heavily interested in either software engineering or " +
                        "working in video games."
                },

                {
                    speaker: 1,
                    text: "Alright, nice to get to know you a little better.",
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
                    text: "That was a project meant to determine the in-between " +
                        "frames of an animation when given only the key frames."
                },

                {
                    speaker: 0,
                    text: "It was coded purely in JavaScript. It allows users to " +
                        "write and create animations entirely in JavaScript!"
                },

                {
                    speaker: 0,
                    text: "You merely need to give it a JSON file that contains " +
                        "a list of keyframes. It does everything else for you."

                },

                {
                    speaker: 0,
                    text: "Additionally, the objects to animate are made using JavaScript."

                },

                {
                    speaker: 0,
                    text: "I believe the art can speak for itself! You can " +
                        "check out a demo animation I made using the link " +
                        "right there.",
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
                    text: "Maybe I should check out the links to see what " +
                        "the kid is talking about. If not, *click to continue*",
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
                    text: "Oh, there's nothing here. Click up in that fancy " +
                        "box I made."
                },

                {
                    speaker: 0,
                    text: "Oh sorry, up there not here!"
                },

                {
                    speaker: 0,
                    text: "Ahh... haha... there's a fancy screen with your " +
                        "clicking device's name on it! Please?"
                },

                {
                    speaker: 0,
                    text: "*cough*"
                },

                {
                    speaker: 0,
                    text: "(Hmm, this is going as bad as I thought it would. " +
                        "I should've rehearsed a few more times.) "
                },

                {
                    speaker: 0,
                    text: "Did you need help deciding what to click? " +
                        "Maybe that small turtle. It has tons to show you. "
                },

                {
                    speaker: 0,
                    text: "(Is... this just a thing? Is this some sort of recruiter " +
                        "tactic?)"
                },

                {
                    speaker: 0,
                    text: "Wowowow you're probably super close to an achievement with " +
                        "how much you've clicked down here!"
                },

                {
                    speaker: 0,
                    text: "ACHIEVEMENT UNLOCKED: INFINTIMUS CLICKIMUS",
                    trigger: "alert",
                    alert: "ACHIEVEMENT UNLOCKED: INFINTIMUS CLICKIMUS"
                },

                {
                    speaker: 0,
                    text: "Your reward is the ability to click anything above in the " +
                        "portfolio! You must've lacked this ability before!"

                },

                {
                    speaker: 0,
                    text: "You excitedly try out your newfound ability and click " +
                        "one of the projects above! Like the turtle one."
                },

                {
                    speaker: 0,
                    text: "Ahaha... I've run out of things to say. " +
                        "I would love to talk more but it would waste this fancy " +
                        "portfolio."

                },

                {
                    speaker: 0,
                    text: "Well, if they don't know what you're saying, run back " +
                        "one more time! I think I can repeat everything I've just said."
                },

                {
                    speaker: 0,
                    text: "Scroll or click any of the topics to hear more!",
                    trigger: "repeat"
                },
            ]
        },

        work: {
            conversation: [
                {
                    speaker: 1,
                    text: "I am merely a demo to easily show the format."
                },

                {
                    speaker: 0,
                    text: "Wow I wish I was you!"
                },
            ]
        },

        template: {
            conversation: [
                {
                    speaker: 1,
                    text: "I am merely a demo to easily show the format."
                },

                {
                    speaker: 0,
                    text: "Wow I wish I was you!"
                },
            ]
        },
    };

    const getConversation = (key, index) => {
        return ConversationDatabase[key].conversation[index]
    };
    window.Conversation = { getConversation };
})();
