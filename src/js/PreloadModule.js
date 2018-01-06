(() => {
    // This module ensures images that are used in dynamically generated elements
    // are loaded before those elements are used.

    // Inspired by:
    // https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/

    const images = [];
    const preload = (...links) => {
        links.forEach((link) => {
            const image = new Image();
            image.src = link;
            images.push(image);
        });
    }

    // Here we just add links to images as needed. After it all loads,
    // whenever an element uses any of these links the browser will
    // have the image cached and ready

    preload (
        "images/smol.png",
        "images/maze.png",
        "images/self_inclusion.png",
        "images/grnmap.png",
        "images/oxtails.png"
    )

    window.Preload = { images };
})();
