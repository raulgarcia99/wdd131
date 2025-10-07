const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

createOption (products)

function convertCapital (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function createOption (products) {
    document.querySelector("#product").innerHTML =
        '<option value="" disabled selected>Select a product</option>';
    products.forEach(product => {
        let option = document.createElement("option");

        option.textContent = convertCapital(product.name);

        option.setAttribute("value", product.id)

        document.querySelector("#product").appendChild(option);
        
    });
}

const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;