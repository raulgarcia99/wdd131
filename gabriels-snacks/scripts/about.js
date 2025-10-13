//Hamburger button
const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
});
/*
//Image list

const images = [
  {
    imageUrl:
    "images/coca-cola.webp"
  },
  {
    imageUrl:
    "images/lays-classic.webp"
  },
  {
    imageUrl:
    "images/gabriels-snacks.png"
  }  
]

//Executing functions

createImageCard(images)


//Function

function createImageCard (images) {
    document.querySelector(".album").innerHTML = "";
    images.forEach(image => {
      let card = document.createElement("section");
      let img = document.createElement("img");

      card.setAttribute("class", "card")
      img.setAttribute("src", image.imageUrl);
      img.setAttribute("alt", `Ilustrative image of snacks`);
      img.setAttribute("width", "300px");
      img.setAttribute("height","300px");
      img.setAttribute("loading", "lazy");

      card.appendChild(img);

      document.querySelector(".album").appendChild(card);
    })
  }
*/
// Footer

const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;