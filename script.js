
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function applyTheme(theme) {
    body.classList.remove("light-mode", "dark-mode");
    body.classList.add(theme + "-mode");

    if (theme === "dark") {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }

    localStorage.setItem("rynrio-theme", theme);
}

// Load the saved theme
const savedTheme = localStorage.getItem("rynrio-theme") || "light";

if (themeToggle) {
    applyTheme(savedTheme);

    themeToggle.addEventListener("click", function () {
        const isDarkMode = body.classList.contains("dark-mode");

        if (isDarkMode) {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }
    });
}



const likeBtn = document.getElementById("likeBtn");
const heart = document.getElementById("heart");
const likeText = document.getElementById("likeText");
const likeCount = document.getElementById("likeCount");

let liked = false;
let count = 0;

likeBtn.addEventListener("click", function () {
    if (liked === false) {
        count++;
        liked = true;

        heart.textContent = "♥";
        likeText.textContent = "Liked!";
        likeBtn.classList.add("liked");
    } else {
        count--;
        liked = false;

        heart.textContent = "♡";
        likeText.textContent = "Like This Story";
        likeBtn.classList.remove("liked");
    }

    likeCount.textContent =
        count + (count === 1 ? " like" : " likes");
});

