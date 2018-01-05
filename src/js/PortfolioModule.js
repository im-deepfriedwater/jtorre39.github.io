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
            title: "GRNmap Research",
            key: "grnmap",
            img: "images/grnmap.png"
        },
    ];
    const getPortfolio = () => portfolio;
    window.Portfolio = { getPortfolio };
})();
