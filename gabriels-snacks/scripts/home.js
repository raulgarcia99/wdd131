//Hamburger button
const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
});

//Products Array

const products = [
  {
    productType: "snack",
    productName: "Cappy",
    price: 0.25,
    content: "70 gr",
    imageUrl:
    "images/cappy.webp"
  },
  {
    productType: "beverage",
    productName: "Cascada Orange",
    price: 0.35,
    content: "355 ml",
    imageUrl:
    "images/cascada-orange.webp"
  },
  {
    productType: "snack",
    productName: "Club Extra",
    price: 0.40,
    content: "225 gr",
    imageUrl:
    "images/club-extra.webp"
  },
  {
    productType: "beverage",
    productName: "Coca-Cola",
    price: 0.85,
    content: "355 ml",
    imageUrl:
    "images/coca-cola.webp"
  },
  {
    productType: "beverage",
    productName: "Del Valle Tangerine",
    price: 0.60,
    content: "500 ml",
    imageUrl:
    "images/del-valle-tangerine.webp"
  },
  {
    productType: "snack",
    productName: "Lays Classic",
    price: 1.00,
    content: "42.5 gr",
    imageUrl:
    "images/lays-classic.webp"
  },
  {
    productType: "beverage",
    productName: "Salutaris Lemon",
    price: 0.75,
    content: "355 ml",
    imageUrl:
    "images/salutaris-lemon.webp"
  },
  {
    productType: "beverage",
    productName: "7UP",
    price: 0.75,
    content: "355 ml",
    imageUrl:
    "images/seven-up.webp"
  },
  {
    productType: "snack",
    productName: "Tosh Coconut",
    price: 0.85,
    content: "355 ml",
    imageUrl:
    "images/tosh-coconut.webp"
  },
  {
    productType: "snack",
    productName: "Toztecas",
    price: 0.25,
    content: "130 gr",
    imageUrl:
    "images/toztecas.webp"
  },
  {
    productType: "beverage",
    productName: "V8 Tropical Blend",
    price: 1.25,
    content: "473 ml",
    imageUrl:
    "images/v8-tropical-blend.webp"
  },
  {
    productType: "snack",
    productName: "Yummi Pops",
    price: 0.40,
    content: "120 gr",
    imageUrl:
    "images/yummi-pops.webp"
  }  
]

//Executing functions

createProductCard(products);

  const snacksFiltered = document.querySelector("#snacks");

  snacksFiltered.addEventListener("click", () => {
    createProductCard(products.filter(product => product.productType === "snack"));
  })

  const beveragesFiltered = document.querySelector("#beverages");

  beveragesFiltered.addEventListener("click", () => {
    createProductCard(products.filter(product => product.productType === "beverage"));
  })

//Functions

function createProductCard (filteredProducts) {
    document.querySelector(".catalog").innerHTML = "";
    filteredProducts.forEach(product => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let content = document.createElement("p");
      let price = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = product.productName;
      content.innerHTML = `<span class= "label">Content:</span> ${product.content}`;
      price.innerHTML = `<span class= "label">Price:</span> $${product.price.toFixed(2)}`;

      card.setAttribute("class", "card")
      img.setAttribute("src", product.imageUrl);
      img.setAttribute("alt", `${product.productName} ${product.content}`);
      img.setAttribute("width", "300px");
      img.setAttribute("height","300px");
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(content);
      card.appendChild(price);
      card.appendChild(img);

      document.querySelector(".catalog").appendChild(card);
    })
  }

// Footer

const currentyear = document.querySelector("#currentyear");
today = new Date()
currentyear.innerHTML = `©${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
modification = new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(modification)} -
${modification.getHours().toString().padStart(2, "0")}:${modification.getMinutes().toString().padStart(2,"0")}`;