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
            title: "Tell Me About Yourself",
            key: "self",
            img: "images/self_inclusion.png"
        },
    ];
    const getPortfolio = () => portfolio;
    window.Portfolio = { getPortfolio };
})();
