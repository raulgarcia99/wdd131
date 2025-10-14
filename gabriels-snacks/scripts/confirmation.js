let opinionCount = localStorage.getItem("opinionCount");

if (opinionCount) {
    opinionCount = parseInt(opinionCount) + 1;}
else {
        opinionCount = 1;
    }

localStorage.setItem("opinionCount", opinionCount)

 document.addEventListener("DOMContentLoaded", () => {
    const showCounter = document.getElementById("opinion-counter");
    if (showCounter) {
      showCounter.textContent = opinionCount
    }
  });

const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;