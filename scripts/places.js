const temperature = 27
const wind_speed = 15

const compute_wind_chill = (t, ws ) =>
    13.12 + 0.6215 * t - 11.37 * Math.pow(ws, 0.16) +
    0.3964 * t * Math.pow(ws, 0.16);

wind_chill = document.querySelector("#wind-chill");
wind_chill.innerHTML =`${compute_wind_chill(temperature, wind_speed).toFixed(1)}°C`;


const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;