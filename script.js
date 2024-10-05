const themeToggleBtn = document.getElementById("theme-toggle");

// Check for saved theme in localStorage and apply it
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  updateIconAndLabel(true);
} else {
  updateIconAndLabel(false);
}

// Toggle dark mode
themeToggleBtn.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Save the current theme in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Change icon and label based on the theme
  updateIconAndLabel(isDarkMode);
});

function updateIconAndLabel(isDarkMode) {
  const icon = themeToggleBtn.querySelector("i");
  if (isDarkMode) {
    icon.classList.replace("fa-moon", "fa-sun");
    themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
  }
}
