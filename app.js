function downloadCV() {
  alert("CV Download initiated! (This is a placeholder function.)");
  // In a real site, you can initiate download like:
  // window.location.href = 'path/to/your-cv.pdf';
}

// Optional: Add form validation or interactivity if needed
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
