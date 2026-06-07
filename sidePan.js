document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const themeButton = document.getElementById("themeButton");
  const panelText = document.getElementById("panelText");
  const quoteButton = document.getElementById("quoteButton");
  const quoteText = document.getElementById("quoteText");

  const quotes = [
    "Consistency makes a UI feel polished.",
    "Small animations improve perceived performance.",
    "A responsive layout works across all device sizes.",
    "Interactive panels help users explore more features."
  ];

  if (!toggleButton || !panelText || !themeButton || !quoteButton || !quoteText) return;

  let visible = true;
  let accentMode = false;

  toggleButton.addEventListener("click", () => {
    visible = !visible;
    panelText.textContent = visible ? "Panel content is visible." : "Panel content is hidden.";
    toggleButton.textContent = visible ? "Hide panel text" : "Show panel text";
  });

  themeButton.addEventListener("click", () => {
    accentMode = !accentMode;
    panelText.style.background = accentMode ? "rgba(69,176,255,0.18)" : "rgba(255,255,255,0.05)";
    panelText.style.borderColor = accentMode ? "rgba(69,176,255,0.28)" : "rgba(255,255,255,0.08)";
    themeButton.textContent = accentMode ? "Reset text style" : "Change text style";
  });

  quoteButton.addEventListener("click", () => {
    quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  });
});
