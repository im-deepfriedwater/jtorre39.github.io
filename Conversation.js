(() => {
    // Speaker Key
    // 3 = ???
    // 2 = narrator
    // 1 = recruiter
    // 0 = Justin Kyle Torres

   const conversation = [
       {
           id: "intro",
           conversation: [
               {
                   speaker: 2,
                   text: `As you start to get ready to leave, you notice a slight
                          disturbance staring at you from the side.`
               },

               {
                   speaker: 1,
                   text: "...Hm? May I help you?"
               },

               {
                   speaker: 3,
                   text: "!"
               },

               {
                   speaker: 2,
                   text: "You notice the source of this disturbance take a deep breath."
               },

               {
                   speaker: 3,
                   text: `Hello! My name is Justin Kyle Torres! I was told you
                          handle recruiting?`
               },

               {
                   speaker: 1,
                   text: `Yes. But I'm sure this can be handled by someone else.
                          Here this is my coworker's business card take this an-`
               },

               {
                   speaker: 0,
                   text: `Uhm- wait! I was told you're the BEST at recruiting. Aren't you?`
               },

               {
                   speaker: 1,
                   text: `... Who said that?`
               },

               {
                   speaker: 2,
                   text: `You feel your ego appeased.`
               },

               {
                   speaker: 1,
                   text: `Well... okay. I can spare 10 minutes.`
               },

               {
                   speaker: 0,
                   text: `Ah! Thank you so much! Let me continue the introduction.`
               },

               {
                   speaker: 0,
                   text: `I'm a Junior pursuing a degree in Computer Science at
                          Loyola Marymount University.`
               },

               {
                 speaker: 0,
                 text:  `I believe I'd be an excellent candidate for your
                         software engineering internship position.`
               },

               {
                 speaker: 0,
                 text:  `I'd like to demonstrate that using my very own portfolio.`
               },

               {
                   speaker: 2,
                   text: "Suddenly, you see a screen appear before you"
               }

               {
                   speaker: 1,
                   text: "How did you do that?"
               }

               {
                 speaker: 0,
                 text: "I was able to make it after two weeks of CSS hell."
               },

               {
                   speaker: 1,
                   text: "Uh... interesting. Continue."
               },

               {
                   speaker: 0,
                   text: `Well anyways! Scroll and click any of the topics to hear more!`
               }
           ]
       }, // end intro
   ];

   window.Game.Conversation = conversation;
})();
