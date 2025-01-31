document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector("#connect-typing");

  const taglines = [
    "Crafting solutions, one code at a time",
    "Coding my way to make a difference",
    "This is Lorence Glen B. Muros",
    "Let's Connect!"
  ];

  let index = 0;
  const typingSpeed = 100; // Speed of typing in ms
  const delayBetweenTaglines = 2000; // Delay before the next tagline

  function typeText(text, callback) {
    typingElement.textContent = ""; // Clear text before typing
    let i = 0;
    const interval = setInterval(() => {
      typingElement.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setTimeout(callback, delayBetweenTaglines);
      }
    }, typingSpeed);
  }

  function startTypingEffect() {
    typeText(taglines[index], () => {
      index = (index + 1) % taglines.length; // Loop through taglines
      startTypingEffect();
    });
  }

  // Use Intersection Observer to detect when the footer is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start typing effect when the section becomes visible
          startTypingEffect();
          observer.disconnect(); // Stop observing after the effect starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(typingElement);
});
