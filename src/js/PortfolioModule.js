(() => {
    const portfolio = [
        {
            title: "Keyframe Tweener",
            key: "tweener",
            img: "images/smol.png"
        },

        {
            title: "Maze Builder Web App",
            key: "maze",
            img: "images/maze.png"
        },

        {
            title: "Talk About Yourself",
            key: "self",
            img: "images/self_inclusion.png"
        },

        {
            title: "GRNmap",
            key: "grnmap",
            img: "images/grnmap.png",
            lineBreak: "Research",
        },

        {
            title: "Website Portfolio",
            key: "website",
            img: "images/self_inclusion.png"
        },

        {
            title: "Pluvio",
            key: "pluvio",
            img: "images/pluvio.png",
            lineBreak: "App",
        },
    ];
    const getPortfolio = () => portfolio;
    window.Portfolio = { getPortfolio };
})();
