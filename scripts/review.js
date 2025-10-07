let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount) {
    reviewCount = parseInt(reviewCount) + 1;}
else {
        reviewCount = 1;
    }

localStorage.setItem("reviewCount", reviewCount)

 document.addEventListener("DOMContentLoaded", () => {
    const showCounter = document.getElementById("review-counter");
    if (showCounter) {
      showCounter.textContent = reviewCount
    }
  });

const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;