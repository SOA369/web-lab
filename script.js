console.log("JS is connected! 🚀");

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.dataset.theme;

    if (currentTheme === "dark") {
        document.body.dataset.theme = "light";
    } else {
        document.body.dataset.theme = "dark";
    }
});
