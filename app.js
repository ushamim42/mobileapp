document.addEventListener("DOMContentLoaded", () => {
  const statusText = document.getElementById("statusText");
  const statusMessage = document.getElementById("statusMessage");
  const welcomeButton = document.getElementById("welcomeButton");

  const tips = [
    "Use the panel page for more interactive controls.",
    "Try this app on mobile for a native-like feel.",
    "Modern layouts improve readability and user engagement.",
    "Tap actions to see instant updates." ];

  const pickTip = () => tips[Math.floor(Math.random() * tips.length)];

  if (welcomeButton) {
    welcomeButton.addEventListener("click", () => {
      const tip = pickTip();
      if (statusText) statusText.textContent = "Tip shown";
      if (statusMessage) statusMessage.textContent = tip;
      welcomeButton.textContent = "Show another tip";
    });
  }

  setTimeout(() => {
    if (statusText) statusText.textContent = "Ready";
  }, 500);
});
