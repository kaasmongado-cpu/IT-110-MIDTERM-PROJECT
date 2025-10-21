document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote");
  const themeButton = document.getElementById("theme-button");

  // === Fetch Random Quote ===
  async function getQuote() {
    quoteText.textContent = "⏳ Loading quote...";
    quoteAuthor.textContent = "";

    try {
      const response = await fetch("https://dummyjson.com/quotes/random");

      if (!response.ok) throw new Error("Failed to fetch quote");

      const data = await response.json();

      quoteText.textContent = `"${data.quote}"`;
      quoteAuthor.textContent = `— ${data.author}`;
    } catch (error) {
      quoteText.textContent = "⚠️ Couldn't fetch a quote right now.";
      quoteAuthor.textContent = "";
      console.error("Error fetching quote:", error);
    }
  }


  newQuoteBtn.addEventListener("click", getQuote);

  // === Theme Toggle ===
  const lightTheme = "light-theme";
  const iconTheme = "bx-sun";

  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "light" : "dark";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "bx-sun" : "bx-moon";

  if (selectedTheme) {
    document.body.classList.toggle(lightTheme, selectedTheme === "light");
    themeButton.classList.toggle(iconTheme, selectedIcon === "bx-sun");
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
});
