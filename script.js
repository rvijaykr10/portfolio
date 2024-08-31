const themeToggleBtn = document.getElementById("theme-toggle");

// Toggle dark mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon based on theme
  const icon = themeToggleBtn.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
  }
});
