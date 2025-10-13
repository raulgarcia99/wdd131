//Hamburger button
const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
});

//Contact Info

const contactInfo = {
    location: "San José Villanueva, El Salvador",
    address: "La Vega 1, Calle Principal, Pje 5",
    email: "gabriels-snacks@gmail.com",
    phone: "+503 6453-2292",
    hours: "Monday - Saturday: 8am-8pm"
};

//Display Contact Info

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#location").innerHTML = `🗺️ <span class= "label">Location:</span> ${contactInfo.location}`;
    document.querySelector("#address").innerHTML = `📍 <span class= "label">Address:</span> ${contactInfo.address}`;
    document.querySelector("#email").innerHTML = `📧 <span class= "label">Email:</span> ${contactInfo.email}`;
    document.querySelector("#phone").innerHTML = `📞 <span class= "label">Phone:</span> ${contactInfo.phone}`;
    document.querySelector("#hours").innerHTML = `⏰ <span class= "label">Hours:</span> ${contactInfo.hours}`;
});


// Footer

const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;