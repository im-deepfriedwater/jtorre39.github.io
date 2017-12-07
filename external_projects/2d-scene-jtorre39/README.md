**CMSI 371** Computer Graphics, Spring 2017

> As advertised, this is really a single overall project—a 2D animated scene implemented from the ground up—broken up into two separate assignments. This README contains the instructions for both of these assignments. 

# Assignment 0201
This initial assignment is meant to get you into a development groove with 2D canvas graphics, as well as mark your first step toward an animated 2D scene.

## Background Reading
Don’t limit your canvas exposure solely to the functions/properties that you specifically use in your drawings—spend some “big picture” time with the [MDN `canvas` tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) and [reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API#Reference) pages. You might be pleasantly surprised by how much you can do.

## Automated Feedback Setup
In order to connect your repository to our automated code review and feedback system, once you are up and running please send your repository’s URL to Ed Seim. You can either find him in person in the lab, tweet him at [https://twitter.com/SirSeim](https://twitter.com/SirSeim), or mention him in a GitHub comment (`SirSeim`). Once he has you hooked up, the system will provide feedback on code formatting and quality whenever you commit a new version to GitHub. _Points will be deducted if issues here linger in the final submission._

For this assignment, a unit test suite is not practical to do: the “demo pages” pretty much comprise a visual test suite. Thus, automated feedback only covers code presentation and formatting.

## For Submission
First, envision an animated 2D scene that you’d like to render. Storyboard or script it so that you can get a concrete idea of what you’d like to see.

Then, write at least three (3) `canvas` functions that draw three distinct objects in your scene. Known as _sprites_, they can be things, characters, vehicles, buildings, whatever you like. We say “at least” because, really, the more you do, the better you’ll get, and we don’t want to artificially limit your practice time (or your creativity). Give your sprites some internally movable characteristics like limbs or facial expressions (see the next section).

Use standard control structures like loops and conditionals as needed; don’t feel limited to just `canvas` functions and properties. We are assuming that you can figure these out in JavaScript on your own, but if you’re really stuck then ask me.

Consult the [MDN `canvas` website](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) extensively so that you don’t miss out on its full feature set.

### Parameterize the Sprites
Your functions’ drawing commands should be _parameterized by a separate model object_. That is, your functions should accept an object parameter whose properties affect how something gets drawn. For example, if you decide to draw a cartoon character, you can supply an object with a property that states how open or closed its eyes are. Or, you might draw a box with a hinged lid, and its object might state how open, in degrees, the lid should be.

### Draw Around the Origin, Transform to Test
One set of characteristics that you _shouldn’t_ parameterize is whole-object movement, rotation, or scaling. These can be done independently by using the `translate`, `scale`, and `rotate` functions, as seen in class.

Also as mentioned in class, center your drawing code around the origin. You can invoke `translate` before calling your sprite function to draw it at the desired location. Similarly, `scale` and `rotate` will resize and turn your entire sprite, respectively. You may play with these in your demonstration pages (described next).

### Deliverable: Naive Animation Sprite Demo
Define your sprite functions in separate JavaScript files (e.g., _lion.js_, _clown.js_, and _circus.js_). Because these functions are intended for reuse, yes, this time you are allowed to define them within a top-level-scope container object, following the pattern in the provided sample code. For encapsulation, it remains recommended that you define the functions inside an anonymous function that is called immediately.

Test/demonstrate your functions by using your sprites in a “naive animation” program, as shown in the sample code. In case you’re keeping score, this all means that, if you define _n_ sprites, you should end up with _n + 1_ JavaScript files and a single HTML file that loads all of them.


# Assignment 0222
This assignment is the actual big 2D scene, implemented from scratch with our homebrew keyframe/tweening library. Let your imagination run wild **:)**

## Background Reading
Read [Robert Penner’s book chapter on motion, tweening, and easing](http://robertpenner.com/easing/penner_chapter7_tweening.pdf). His [overall website](http://robertpenner.com/easing/) holds additional useful resources as well.

## Automated Feedback Setup
Like the previous assignment, please send your repository’s URL to Ed Seim. Also like the previous assignment, automated feedback only covers code presentation and formatting.

## For Submission
Modify the starter _scene.json_ so that it features a 2D animated scene that is written and directed (and implemented!) by _you_ and starring the “sprites” (actually parameterized drawing functions) from the preceding assignment. Ideally, your scene will work as a very brief animated short, with a quick and engaging little store and characters.

To support your new and improved animated scene, enhance the _keyframe-tweener.js_ animation module in the following ways. Of course, you should demonstrate these enhancements by using them in your own animated short (a.k.a. “eating your own dog food”).

### Overlapping/Skipping Keyframe Ranges
_Limitation:_ The current version of `KeyframeTweener` requires that all tweened properties appear in _every keyframe_ of a sprite. That is, if a translation is specified in one keyframe, the destination translation _must_ be specified in the next one, or else the sprite gets tweened back to some default value.

_Improvement to Make:_ Modify the animation code so that properties can skip keyframes, allowing properties to start and end tweening at any time. That way, a sprite can move from one location to another in, say, 100 frames, but within those 100 frames it might perform multiple rotations.

### Arbitrary Tweenable Properties
_Limitation:_ In its current form, `KeyframeTweener` can only tween whole-sprite translation, rotation, and scaling. In addition, that code is quite repetitive.

_Improvement to Make:_ Extend `KeyframeTweener` so that it can handle _arbitrary tweenable property values_ in the keyframe objects that it processes. This feature is intended precisely to support the ability to animate your parameterized sprites in addition to just whole-sprite translation, rotation, and scaling. Design the data structure and write the needed code to process (tween) these properties then relay them into your sprite’s object parameter. Ideally, this work will also reduce the repetitive transform-tweening code that is in the current `KeyframeTweener`.

### New Tweening Functions
_Limitation:_ The current `KeyframeTweener` implements only four tweening functions.

_Improvement to Make:_ Adapt at least two (2) _non-monotonic tweening functions_ from either [Dan Rogers’s library](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js) or [Tim Groleau’s Easing Function Generator](http://www.timotheegroleau.com/Flash/experiments/easing_function_generator.htm) (Flash required) into `KeyframeTweener`  and use them in your animated scene. The more visually distinct, the better.
