**CMSI 370** Interaction Design, Fall 2017

# Assignment 1130

For this assignment, we turn our attention to the _direct manipulation_ interaction style. As before, resources to help you with this include many of the links listed on the course website, assorted samples from the [bazaar](https://github.com/dondi/bazaar) repository, and the starter files that are included with your GitHub Classroom repositories for this assignment, once you have set yourself up.

## Background Reading
Textbook reading is centered on the direct manipulation interaction style, which would be Shneiderman/Plaisant Chapter 5. Additional helpful material outside of the web and the [bazaar](https://github.com/dondi/bazaar) code will be the case studies in Chapter 9 of the JavaScript textbook. These case studies demonstrate lower-level event handling with some direct manipulation elements. Code from that chapter is available on the [JavaScript book’s GitHub repository](https://github.com/dondi/javascript-book/tree/master/chapter09).

### Best Practices, Implementation Notes, and Automated Feedback
Remember that this is a _proof-of-concept_ app—focus on the multitouch and acceleration functionality and don’t get lost in refinement and details. Do that _after_ the assignment is due.

The sample code that comes with your GitHub Classroom repository is fully configured for code style review ([ESLint](http://eslint.org)). It will be hard enough to implement this from first principles, and it will be harder still to write unit tests for these, so no test suite is required for this assignment. Test your app manually.

### Automated Feedback Setup
In order to connect your repository to our automated code review and feedback system, once you are up and running please send your repository’s URL to [Thomas O’Brien](https://github.com/obrienthomas13). Create a GitHub issue on your repository and mention him in it (`@obrienthomas13`). Once he has you hooked up, the system will provide feedback on code formatting and quality whenever you commit a new version to GitHub. _Points will be deducted if issues here linger in the final submission._

## For Submission
This assignment requires access to a multitouch-capable and accelerometer-aware web browser. Most of you already own such a device; if not, arrange to check one out from the Keck lab.

### A Direct Manipulation Proof-of-Concept
The code in the GitHub Classroom repository is a copy of the [boxes-with-physics](https://github.com/dondi/bazaar/tree/master/boxes-with-physics) sample from the bazaar. Modify this code into one of the following options:

#### A “Bubble Simulator” App
Convert the supplied code into a “bubble simulator” app where:
- Instead of boxes, the objects in the drawing area look like bubbles.
- Because these are bubbles, instead of falling toward the ground, they float up instead. Their motion should be as similar to real bubbles as possible, including the way they bounce off the app’s boundaries. (_Hint:_ Define a “buoyancy” vector that accelerates the bubbles upward. This vector’s interaction with gravity will provide the touch of realism.)
- The user “blows” new bubbles into existence by dragging their finger(s) across the drawing area.
- The user can either inflate or deflate existing bubbles (your choice) using a touch interaction of your own design.
- When inflation reaches a designated maximum radius or deflation reaches a minimum radius, make the bubbles “pop”—i.e., delete them from the app.

_Bubble creation and, if possible, inflation/deflation, like bubble motion, must be fully multitouch-capable: that is, the user should be able to perform operations concurrently on multiple bubbles, limited only by the number of fingers that the device can follow._

Optional features (time permitting) include:
- Giving bubbles a finite lifespan, such that they “pop” on their own after some time.
- Implementing other objects in the display area, such as fish, seaweed, swimmers, etc. (you can decide how these interact with the environment)
- Implementing bubble-blowing options such as colors and borders.

#### A “Maze Ball” App
Convert the supplied code into a “maze builder” app where:
- There are two types of objects—instead of just boxes, there are bricks and balls.
- The bricks can be created and dragged, just like the current boxes _but without being affected by device motion_.
- The balls _are_ affected by device motion and gravity, but can’t be created nor controlled by the user in any other way. (i.e., predefine them on your web app at preset locations) They should _probably_ also look like…balls.
- When the user rotates the device that runs the app, the balls move accordingly, but they ricochet off any bricks that are in their path.
- Bricks don’t need to interact with each other: they may overlap and be moved freely.
- Design a mechanism for deleting bricks, so that the maze doesn’t monotonically get tighter and tighter.

_Brick creation and motion, must be fully multitouch-capable: that is, the user should be able to perform operations concurrently on multiple bricks, limited only by the number of fingers that the device can follow._ As bricks are being moved and created, balls should keep on rolling in accordance with the device’s orientation and gravity.

Optional features (time permitting) include:
- Brick destruction: If a ball collides with a brick at sufficient speed, it destroys the brick.
- Ball collision: Balls also bounce off each other.
- Some kind of scoring: You can give the app a pinball-like dynamic by keeping track of a score for events such as brick-and-ball collision, brick destruction, etc.
- Use of images: You don’t need to restrict your bricks and balls to CSS-only visuals; feel free to use `img` elements to give them a custom look.

### How to Turn it In
Commit your direct manipulation web app files such that your repository becomes the root location of a web server. To evaluate your work, we will run a simple HTTP server from a local copy of that directory and use your application from a multitouch- and accelerometer-capable web browser.

## Specific Point Allocations
Programming assignments are scored according to outcomes _3a_, _3b_, and _4a_ to _4f_ in the [syllabus](http://dondi.lmu.build/fall2017/cmsi370/cmsi370-fall2017-syllabus.pdf). For this particular assignment, graded categories are as follows:

### Bubble Simulator

| Category | Points | Outcomes |
| -------- | -----: | -------- |
| Bubble look | 10 | _3a_, _4a_, _4b_, _4d_ |
| Bubble motion | 30 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Bubble creation | 20 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Bubble inflation/deflation | 30 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Bubble popping (deletion) | 10 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Linting | deduction only | _4c_ |
| Version Control | deduction only | _4e_ |
| Punctuality | deduction only | _4f_ |
| **Total** | **100** |

### Maze Balls

| Category | Points | Outcomes |
| -------- | -----: | -------- |
| Distinct bricks and balls | 10 | _3a_, _4a_, _4b_, _4d_ |
| Brick creation | 20 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Brick dragging | 10 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Ball motion | 10 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Ball-to-brick collision | 25 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Brick deletion | 25 | _3a_, _3b_, _4a_, _4b_, _4d_ |
| Linting | deduction only | _4c_ |
| Version Control | deduction only | _4e_ |
| Punctuality | deduction only | _4f_ |
| **Total** | **100** |

The last three graded categories are “deduction only,” meaning that you will only get points taken off if there are significant issues with those categories. Such issues include but are not limited to: lingering linting errors as of the final commit (_4c_), insufficiently granular or unmessaged commits (_4e_), and late commits (_4f_).

Optional features, if implemented, will be given bonus points depending on degree of difficulty and correctness of execution. However, such features will not be looked at until the requested functions are fulfilled.
