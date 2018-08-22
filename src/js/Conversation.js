(() => {


    const generateEducationStatus = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; //january starts at 0
        const expectedGraduation = 2019;

        const graduatePrefix = "I recently graduated in 2019 with a ";
        const resultSuffix = " Bachelor's degree in computer science at " +
            "Loyola Marymount University.";

        const underGraduateString =  (year) => "I'm a " + year + " pursuing a ";

        let result = "";

        if (year < expectedGraduation) {
            result = month > 5 ? underGraduateString("Senior") : underGraduateString("Junior");
        } else if (year === expectedGraduation){
            result = month > 5 ? graduatePrefix : underGraduateString("Senior");
        } else {
            result = graduatePrefix;
        }

        return result + resultSuffix
    };

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
                    text: "You feel your ego swell with acknowledgement. "
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
                    text: generateEducationStatus()
                },

                {
                    speaker: 0,
                    text: "I believe I'd be an excellent candidate for your " +
                            "software engineering position."
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
                    text: "The purpose was to work with " +
                        "a direct manipulation UI. It was a great " +
                        "interaction design exercise."
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
                    text: "My role is like a software engineer. I come in " +
                        "for weekly meetings, then I work on the tasks for the week."
                },

                {
                    speaker: 0,
                    text: "My work has encompassed code refactorization, " +
                        "updating an integral data structure for missing input, "
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
                        "languages."
                },

                {
                    speaker: 0,
                    text: "The experience I have while working on GRNmap " +
                        "transfers to any other software engineering. "
                },

                {
                    speaker: 1,
                    text: "Well said."
                },

                {
                    speaker: 0,
                    text: "I recently presented a poster on this project at " +
                       "an academic conference known as SCCUR 2017.",

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

                {
                    speaker: 0,
                    text: " You can also view the website and GitHub repository up above!",
                },

                {
                    speaker: 2,
                    text: "You see glorious links to other websites. You ponder " +
                        "whether to click them. If not, click to continue."
                },

                {
                    speaker: 2,
                    text: "You sneeze.",
                },


                {
                    speaker: 0,
                    text: "Bless you!"
                },

                {
                    speaker: 1,
                    text: "Thank you. Let me hear about something else now.",
                    trigger: "end"
               }
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
                    text: "You can view the GitHub repository and also a blog " +
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
                    text: "Oh I would love to work on a video game. I think video games " +
                        "are something of the perfect medium."
                },

                {
                    speaker: 0,
                    text: "They allow for such a unique combination of art, sound, story " +
                        "and interactivity."
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
                    text: `What's this "Oxtails Project"?`
                },

                {
                    speaker: 0,
                    text: "Oxtails is a codename for a video game I am working on " +
                        "with some classmates."
                },

                {
                    speaker: 0,
                    text: "We unfortunately don't have much in terms of concrete content done. "
                        + "It's very much still in a prototype phase."
                },

                {
                    speaker: 0,
                    text: "It currently runs on Unity and C#."
                },

                {
                    speaker: 0,
                    text: "I am the programmer for the project and did finish writing a " +
                        "dialogue system and basic platform system for it. "
                },

                {
                    speaker: 0,
                    text: "It is meant to be a 2D puzzle-platfomer with an emphasis " +
                        "on character interactions."
                },

                {
                    speaker: 1,
                    text: "Why don't you tell me about those systems you wrote?"
                },

                {
                    speaker: 0,
                    text: "Oh the platforming system is nothing special. You can run around " +
                        "jump, wall-slide, and pick up powerups."
                },

                {
                    speaker: 0,
                    text: "The dialogue system  " +
                        "parses XML files and dynamically configures the onscreen actors."
                },

                {
                    speaker: 0,
                    text: "It has the capacity to give the dialogue options too, "
                        + "thus allowing branching paths within dialogue. "
                },

                {
                    speaker: 0,
                    text: "I had to come up with some data structures to handle all "
                        + "that as well. It was a fun excercise."
                },

                {
                    speaker: 1,
                    text: 'Also, why "Oxtails?"'
                },

                {
                    speaker: 0,
                    text: "We took inspiration from indie game company Doublefine " +
                        "who use bars they visited for codenames of projects."
                },

                {
                    speaker: 0,
                    text: "One of my family dishes has oxtails in it, I happened " +
                        "to be eating it while discussing what to name it."
                },

                {
                    speaker: 1,
                    text: "Admittedly it's an odd name for a video game."
                },

                {
                    speaker: 0,
                    text: "I agree but the name ended up sticking. It's just " +
                        "subsitute name before we come up with a real name."
                },

                {
                    speaker: 0,
                    text: "You can see a clip of the dialogue system up above! " +
                        "We made some scratch art and dialogue for it.",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "Watch Clip",
                            src: "https://youtu.be/r7NK5kmcToA"
                        }
                    ]
                },

                {
                    speaker: 2,
                    text: "It piques your interest. So you consider checking out the video. " +
                        "Else, click this dialogue box to continue."
                },

                {
                    speaker: 1,
                    text: "I wish you good luck on the project Mr. Torres. I'd like to ask you " +
                        "about something else now.",
                    trigger: "end"
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
                    text: "Well, maybe you didn't hear me the first time? " +
                        "I think I can repeat everything I've just said."
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
                    text: "Why don't you tell me about your work history?"
                },

                {
                    speaker: 0,
                    text: "I just finished a software engineering internship " +
                        "at STRIVR, a company specializing in VR training"
                },

                {
                    speaker: 0,
                    text: "It was an amazing opportunity to contribute " +
                        "production code to STRIVR's training software and "
                },

                {
                    speaker: 0,
                    text: "their data pipeline. All the meanwhile learning " +
                        "to work as a fully-fledged software engineer."
                },

                {
                    speaker: 0,
                    text: "I currently work as a Computer Science Teaching Assistant " +
                        "at Loyola Marymount University at school."
                },

                {
                    speaker: 0,
                    text: "I started in January 2018 and my duties involve anwering " +
                        "any questions students have regarding computer science."
                },

                {
                    speaker: 0,
                    text: "This requires me to have a strong and fundamental " +
                        "understanding of various subjects such as: "

                },

                {
                    speaker: 0,
                    text: "programming, data structures, algorithms, and web development."
                },

                {
                    speaker: 0,
                    text: "I come equipped with listening and problem-solving skills " +
                        "to tackle any questions that are asked."
                },

                {
                    speaker: 1,
                    text: "Any other previous work experiences?"
                },

                {
                    speaker: 0,
                    text: "I worked at the school library as an ITS Helpdesk Technician" +
                        "from September 2015 to July 2017."
                },


                {
                    speaker: 0,
                    text: "My responsibility was to assist patrons with any " +
                        "technical question or issue they might have."
                },

                {
                    speaker: 0,
                    text: "I gained valuable experience in communication, listening, " +
                        "and problem-solving with patrons."
                },


                {
                    speaker: 0,
                    text: "You can see more about my work experience and projects on my resume!",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "Resume",
                            src: "https://www.dropbox.com/s/kjwfxkzabyvg4o3/Justin%20Kyle%20Torres%20Resume.docx?dl=0"
                        }
                    ]
                },

                {
                    speaker: 2,
                    text: "You take a moment and consider checking out the resume. " +
                        "If you're sick of looking at resumes, click to continue."
                },

                {
                    speaker: 1,
                    text: "Let's look at something else shall we?",
                    trigger: "end"
                }
            ]
        },

        finale: {
            conversation: [
                {
                    speaker: 2,
                    text: "You seem to have talked about everything on the porfolio." +
                        "You wonder if awkward silence ensues.",
                    trigger: "close-portfolio"

                },

                {
                    speaker: 0,
                    text: "Wow, I admittedly never expected someone to actually " +
                        "ask about everything. "
                },

                {
                    speaker: 1,
                    text: "I wasn't expecting to spend more than three minutes. " +
                        "I'm impressed you held my attention so long."
                },

                {
                    speaker: 0,
                    text: "Thank you so much for giving this so much of your time!"
                },

                {
                    speaker: 1,
                    text: "Yeah, yeah, all part of an ace recruiter's job."
                },

                {
                    speaker: 1,
                    text: "I'll be honest. I don't look for candidates who proclaim " +
                        "themselves as something."
                },

                {
                    speaker: 1,
                    text: "I look for candidates who prove what they are through " +
                        "their work and their actions.",
                    trigger: "alert",
                    alert: "ACHIEVEMENT UNLOCKED: TRUE ENDING"
                },

                {
                    speaker: 0,
                    text: "Right."
                },

                {
                    speaker: 1,
                    text: "I will say you did show me something today. It was "
                        + "mildly entertaining to say the least. "
                },

                {
                    speaker: 1,
                    text: "Do you have anything to add?"
                },

                {
                    speaker: 0,
                    text: "Well I just wante-"
                },

                {
                    speaker: 1,
                    text: "Nevermind, I have more to say."
                },

                {
                    speaker: 0,
                    text: "Oh OK."
                },

                {
                    speaker: 1,
                    text: "You did talk a lot. But you did so in a way that " +
                        "speaks to your creativity and identity."
                },

                {
                    speaker: 1,
                    text: "At my level, I've dealt with a lot a resistance " +
                        "from higher-ups to get where I am today."
                },

                {
                    speaker: 1,
                    text: "But I'm proud of all the people I've hired, even the " +
                        "ones who did not quite pan out. "
                },

                {
                    speaker: 1,
                    text: "Keep seeking out projects and work you can be proud of."
                },

                {
                    speaker: 1,
                    text: "I do have to take off now. You found your way up " +
                        "here and I'm sure you can find your way out."
                },

                {
                    speaker: 0,
                    text: "Ah, thank you! I'm very much grateful for all the time " +
                        "you gave to me."
                },

                {
                    speaker: 2,
                    text: "You get up, and begin to walk towards the exit."
                },

                {
                    speaker: 1,
                    text: "I'll be keeping an eye out for your resume when you do " +
                        "get around to applying."
                },

                {
                    speaker: 2,
                    text: "The next day, you consider contacting the kid."
                },

                {
                    speaker: 2,
                    text: "THE END",
                    trigger: "alert",
                    alert: "You've finished the game! If you close the tab, " +
                        "it will now no longer be considered rude. If you want to " +
                        "for some reason experience it again, refresh the page! "
                }
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
        return ConversationDatabase[key].conversation[index];
    };


    window.Conversation = { getConversation };
})();
