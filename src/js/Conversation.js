(() => {


    const generateEducationStatus = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + SpeakerEnum.recruiter; // January starts at 0.
        const expectedGraduation = 2019;

        const graduatePrefix = "I recently graduated in 2019 with a ";
        const resultSuffix = " Bachelor's degree in computer science at " +
            "Loyola Marymount University.";

        const underGraduateString = (year) => "I'm a " + year + " pursuing a ";

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

    const SpeakerEnum = {
        "justin": 0,
        "recruiter": 1,
        "narrator": 2,
        "unknown": 3
    };

    const ConversationDatabase = {
        intro: {
            conversation: [{
                    speaker: SpeakerEnum.narrator,
                    text: "As you get ready to leave, you feel a " +
                        "slight disturbance staring at you from the side." +
                        "*Click to Continue*"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "...Hm? May I help you?"
                },

                {
                    speaker: SpeakerEnum.unknown,
                    text: "!",
                    trigger: "show-portrait"

                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You notice the source of this disturbance take a deep breath."
                },

                {
                    speaker: SpeakerEnum.unknown,
                    text: "Hello! My name is Justin Kyle Torres! I was told you handle recruiting?"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Yes. But I'm sure this can be handled by someone " +
                        "else. Here take my coworker's business card an-"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Uhm- wait! I was told you're the BEST at recruiting. Aren't you?"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "... Now who said that?"
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You feel your ego swell with acknowledgement. "
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Well... okay. I can spare 5 minutes."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Ahh! Thank you so much! Let me continue the introduction."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: generateEducationStatus()
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I believe I'd be an excellent candidate for your " +
                            "software engineering position."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I'd like to demonstrate that using my very own portfolio."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "Suddenly, you see a screen appear before you! \n" +
                        "*Click here to continue*",
                    trigger: "portfolio-spawn"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Huh. Wow."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Scroll or click any of the topics to hear more!",
                    end: true
                }
            ]
        },

        maze: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: `What's this "Maze Builder Web App"?`
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Written using JavaScript and jQuery, " +
                        "it is meant for devices with touch and accelormeters."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It lets you draw walls and " +
                        "tilt the device to control the balls. Walls can be " +
                        "moved after being placed."

                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Also any existing wall can be deleted by dragging "
                        + "the wall outside the bounds."

                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "The purpose was to work with " +
                        "a direct manipulation UI. It was a great " +
                        "interaction design exercise."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "If you have a touch screen device right now..."
                },

                {
                    speaker: SpeakerEnum.justin,
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
                    speaker: SpeakerEnum.narrator,
                    text: "You consider trying the app. You build excellent " +
                        "mazes you suspect. If not, click to continue."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Alright, it would take too long for the masses to solve my " +
                        "mazes. Let's move on.",
                    trigger: "end"
                },
            ]
        },

        grnmap: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: 'Tell me about your "GRNmap Research" and your role on it.'
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "GRNmap is a software package written in MATLAB meant " +
                        "for modeling the dynamics of GRNs."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It is a research project I work on at university. " +
                        "I've been on it for about a year and a half."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "A GRN?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "GRN stands for gene regulatory network, and it " +
                        "describes gene expressions over time."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Genes bring me back to high school biology. This sounds " +
                        "like a complicated project."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "We collaborate with professors " +
                        "across three different disciplines to work on this project."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "The icon up there is GRNsight's, a sister project. " +
                        "They work on visualization using GRNmap's output."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "So one of the keywords for this project is collaboration."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Yes! That's right. There's a lot of communication and " +
                        "cross-discipline work that happens here."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "My role is like a software engineer. I come in " +
                        "for weekly meetings, then I work on the tasks for the week."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "My work has encompassed code refactorization, " +
                        "updating an integral data structure for missing input, "
                },


                {
                    speaker: SpeakerEnum.justin,
                    text: "implemented new features, fixed bugs, all the while maintaining " +
                        "and improving the existing test suite."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "So you did all this in MATLAB? We unfortunately do not work with MATLAB here."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I'm a firm believer that for a computer scientist, " +
                        "programming languages are but a tool in our tool box."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "General concepts and paradigms are across all programming " +
                        "languages."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "The experience I have while working on GRNmap " +
                        "transfers to any other software engineering. "
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Well said."
                },

                {
                    speaker: SpeakerEnum.justin,
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
                    speaker: SpeakerEnum.justin,
                    text: " You can also view the website and GitHub repository up above!",
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You see glorious links to other websites. You ponder " +
                        "whether to click them. If not, click to continue."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You sneeze.",
                },


                {
                    speaker: SpeakerEnum.justin,
                    text: "Bless you!"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Thank you. Let me hear about something else now.",
                    trigger: "end"
               }
            ]
        },

        pluvio: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Could you speak about... pluv-io?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It's short for pluviophile which describes someone " +
                        "who loves rain! It's the next project I plan to work on."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Pluvio is an ambient rain noise mobile app for Android! " +
                        "It will be written using C# and the Xamarin framework."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "There has to be a couple of ambient rain noise apps " +
                        "on the market. What makes Pluvio different?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "From experience there's a few features missing from " +
                        "those. I decided to take matters into my own hands."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It will also be a great learning experience for me to work " +
                        "with the Xamarin framework for the first time."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I hope to have something to show for it sometime soon!"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Maybe I'll check it out when you're done with it.",
                    trigger: "end"
                },
            ]
        },

        website: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Speak to me about this portfolio you've made in front " +
                        "of me."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "A friend of mine convinced me to buy the domain for my " +
                        "name. I would work on a website for it every once in a while."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "But I kept hitting a wall. I had a generic design that " +
                        "wasn't particularly inspiring or unique."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "So I committed my next break to working on a website " +
                        "that accurately captured me."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Over a two week break from school, I wrote this website " +
                        "using JavaScript, jQuery, HTML, and CSS. "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Video games are a big part of my life, so I decided " +
                        "to encompass that literally in my website portfolio."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You have a brief moment of existentialism."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: " You wonder what if you were merely nothing but a " +
                        "component in some student's website portfolio."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "(... There's no way. I'm such a great recruiter. It's " +
                        "impossible to capture that in some interactive portfolio.)"
                },

                {
                    speaker: SpeakerEnum.justin,
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
                    speaker: SpeakerEnum.narrator,
                    text: "If you are done viewing the links, click here to continue. " +
                        "Or you may continue spacing out."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "A-ah. Most interesting. Let's continue.",
                    trigger: "end"
                },
            ]
        },

        self: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Why don't you tell me more about yourself?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Yeah sure! Well first I grew up on video games. Video games even " +
                        "led me to start studying computer science."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "A few years later, I've come out with a passion for " +
                        "computer science I wasn't expecting to have."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Along the way I've had experiences that fostered " +
                        "a strong sense of collaboration and communication in me."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "The opportunity to create something in this day and age " +
                        "with a team of other creative and passionate people- "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "That is something I savor and hope to have in my career."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Is your career interest making video games?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Oh I would love to work on a video game. I think video games " +
                        "are something of the perfect medium."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "They allow for such a unique combination of art, sound, story " +
                        "and interactivity."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "But I've realized software engineering would be just as "
                        + "challenging and rewarding to do as well. "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I'm heavily interested in either software engineering or " +
                        "working in video games."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Alright, nice to get to know you a little better.",
                    trigger: "end"
                },
            ]
        },

        oxtails: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: `What's this "Oxtails Project"?`
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Oxtails is a codename for a video game I am working on " +
                        "with some classmates."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "We unfortunately don't have much in terms of concrete content done. "
                        + "It's very much still in a prototype phase."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It currently runs on Unity and C#."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I am the programmer for the project and did finish writing a " +
                        "dialogue system and basic platform system for it. "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It is meant to be a 2D puzzle-platfomer with an emphasis " +
                        "on character interactions."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Why don't you tell me about those systems you wrote?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Oh the platforming system is nothing special. You can run around " +
                        "jump, wall-slide, and pick up powerups."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "The dialogue system  " +
                        "parses XML files and dynamically configures the onscreen actors."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It has the capacity to give the dialogue options too, "
                        + "thus allowing branching paths within dialogue. "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I had to come up with some data structures to handle all "
                        + "that as well. It was a fun excercise."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: 'Also, why "Oxtails?"'
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "We took inspiration from indie game company Doublefine " +
                        "who use bars they visited for codenames of projects."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "One of my family dishes has oxtails in it, I happened " +
                        "to be eating it while discussing what to name it."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Admittedly it's an odd name for a video game."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I agree but the name ended up sticking. It's just " +
                        "subsitute name before we come up with a real name."
                },

                {
                    speaker: SpeakerEnum.justin,
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
                    speaker: SpeakerEnum.narrator,
                    text: "It piques your interest. So you consider checking out the video. " +
                        "Else, click this dialogue box to continue."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I wish you good luck on the project Mr. Torres. I'd like to ask you " +
                        "about something else now.",
                    trigger: "end"
                },
            ]
        },

        tweener: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Tell me about that turtle over there."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "That was a project meant to determine the in-between " +
                        "frames of an animation when given only the key frames."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It was coded purely in JavaScript. It allows users to " +
                        "write and create animations entirely in JavaScript!"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "You merely need to give it a JSON file that contains " +
                        "a list of keyframes. It does everything else for you."

                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Additionally, the objects to animate are made using JavaScript."

                },

                {
                    speaker: SpeakerEnum.justin,
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
                    speaker: SpeakerEnum.narrator,
                    text: "Maybe I should check out the links to see what " +
                        "the kid is talking about. If not, *click to continue*",
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Let's move on.",
                    trigger: "end"
                }
            ]
        },

        stall: {
            conversation: [
                {
                     speaker: SpeakerEnum.justin,
                     text: "Click on any of the above items!"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Oh, there's nothing here. Click up in that fancy " +
                        "box I made."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Oh sorry, up there not here!"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Ahh... haha... there's a fancy screen with your " +
                        "clicking device's name on it! Please?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "*cough*"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "(Hmm, this is going as bad as I thought it would. " +
                        "I should've rehearsed a few more times.) "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Did you need help deciding what to click? " +
                        "Maybe that small turtle. It has tons to show you. "
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "(Is... this just a thing? Is this some sort of recruiter " +
                        "tactic?)"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Wowowow you're probably super close to an achievement with " +
                        "how much you've clicked down here!"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "ACHIEVEMENT UNLOCKED: INFINTIMUS CLICKIMUS",
                    trigger: "alert",
                    alert: "ACHIEVEMENT UNLOCKED: INFINTIMUS CLICKIMUS"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Your reward is the ability to click anything above in the " +
                        "portfolio! You must've lacked this ability before!"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "You excitedly try out your newfound ability and click " +
                        "one of the projects above! Like the turtle one."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Ahaha... I've run out of things to say. " +
                        "I would love to talk more but it would waste this fancy " +
                        "portfolio."

                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Well, maybe you didn't hear me the first time? " +
                        "I think I can repeat everything I've just said."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Scroll or click any of the topics to hear more!",
                    trigger: "repeat"
                },
            ]
        },

        work: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Why don't you tell me about your work history?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I just finished a software engineering internship " +
                        "at STRIVR, a company specializing in VR training."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It was an amazing opportunity to contribute " +
                        "production code to STRIVR's training software and-"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "-their data pipeline. All the meanwhile learning " +
                        "to work as a fully-fledged software engineer."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Now I work as a Computer Science Teaching Assistant " +
                        "at Loyola Marymount University at school."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I started in January 2018 and my duties involve anwering " +
                        "any questions students have regarding computer science."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "This requires me to have a strong and fundamental " +
                        "understanding of various subjects such as- "

                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "-programming, data structures, algorithms, and web development."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I come equipped with listening and problem-solving skills " +
                        "to tackle any questions that are asked."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Any other previous work experiences?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I worked at the school library as an ITS Helpdesk Technician" +
                        "from September 2015 to July 2017."
                },


                {
                    speaker: SpeakerEnum.justin,
                    text: "My responsibility was to assist patrons with any " +
                        "technical question or issue they might have."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "I gained valuable experience in communication, listening, " +
                        "and problem-solving with patrons."
                },


                {
                    speaker: SpeakerEnum.justin,
                    text: "You can see more about my work experience and projects on my resume!",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "Resume",
                            src: "https://www.dropbox.com/s/rjlx5gzrwf2ukic/Justin%20Kyle%20Torres%20Resume.pdf?dl=SpeakerEnum.justin"
                        }
                    ]
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You take a moment and consider checking out the resume. " +
                        "If you're sick of looking at resumes, click to continue."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Let's look at something else shall we?",
                    trigger: "end"
                }
            ]
        },

        finale: {
            conversation: [
                {
                    speaker: SpeakerEnum.narrator,
                    text: "You seem to have talked about everything on the porfolio." +
                        "You wonder if awkward silence ensues.",
                    trigger: "close-portfolio"

                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Wow, I admittedly never expected someone to actually " +
                        "ask about everything. "
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I wasn't expecting to spend more than three minutes. " +
                        "I'm impressed you held my attention so long."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Thank you so much for giving this so much of your time!"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Yeah, yeah, all part of an ace recruiter's job."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I'll be honest. I don't look for candidates who proclaim " +
                        "themselves as something."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I look for candidates who prove what they are through " +
                        "their work and their actions.",
                    trigger: "alert",
                    alert: "ACHIEVEMENT UNLOCKED: TRUE ENDING"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Right."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I will say you did show me something today. It was "
                        + "mildly entertaining to say the least. "
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Do you have anything to add?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Well I just wante-"
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Nevermind, I have more to say."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Oh OK."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "You did talk a lot. But you did so in a way that " +
                        "speaks to your creativity and identity."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "At my level, I've dealt with a lot a resistance " +
                        "from higher-ups to get where I am today."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "But I'm proud of all the people I've hired, even the " +
                        "ones who did not quite pan out. "
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Keep seeking out projects and work you can be proud of."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I do have to take off now. You found your way up " +
                        "here and I'm sure you can find your way out."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "Ah, thank you! I'm very much grateful for all the time " +
                        "you gave to me."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "You get up, and begin to walk towards the exit."
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I'll be keeping an eye out for your resume when you do " +
                        "get around to applying."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "The next day, you consider contacting the kid."
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "THE END",
                    trigger: "alert",
                    alert: "You've finished the game! If you close the tab, " +
                        "it will now no longer be considered rude. If you want to " +
                        "for some reason experience it again, refresh the page! "
                }
            ]
        },

        jen: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Ah what's that... jen-lang?"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "jen is a programming language that I got to " +
                        "design and implement alongside a student team!"
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "We implemented it in JavaScript, with design " +
                        "inspiration from Python, Go, Elm, and TypeScript."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "My favorite feature of the language is the " +
                        "sum type, which we got in last minute."
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "It's my favorite school project I got to " +
                        "work on and sparked a huge interest in me for " +
                        "program language design."  
                },

                {
                    speaker: SpeakerEnum.justin,
                    text: "My group members have moved on but I am continuing " + 
                        "development on the language as an independent studies " + 
                        "project."
                }, 
                
                {
                    speaker: SpeakerEnum.justin,
                    text: "Oh and the language name is from our titular team " +
                        "member named Jen!"
                },

                {
                    speaker: SpeakerEnum.narrator,
                    text: "As an esteemed recruiter, you consider giving the " +
                        "links some of your precious time if you can spare " +
                        "the generosity.",
                    trigger: "spawn-links",
                    links: [
                        {
                            title: "website",
                            src: "http://justinkyletorres.com/jen/"
                        },

                        {
                            title: "github repo",
                            src: "https://github.com/jtorre39/jen"
                        },

                        {
                            title: "example programs",
                            src: "http://justinkyletorres.com/jen/examples.html"
                        }
                    ]
                },

                {
                    speaker: SpeakerEnum.recruiter,
                    text: "Glad you found a project that you were passionate " +
                        "about. Let's get back to the rest of the portfolio.",
                    trigger: "end"
                }
            ]
        },

        template: {
            conversation: [
                {
                    speaker: SpeakerEnum.recruiter,
                    text: "I am merely a demo to easily show the format."
                },

                {
                    speaker: SpeakerEnum.justin,
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
