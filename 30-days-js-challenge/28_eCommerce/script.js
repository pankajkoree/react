const data = await fetch("./products.json");
const response = await data.json();
console.log(response);

const container = document.createElement("div");
container.classList.add("cards-container");
document.body.append(container);

response.forEach((element, i) => {
  const divdata = document.createElement("div");
  divdata.classList.add("card");
  divdata.innerHTML = `
        <h1 class='productHeading productHeading${i}'>${element.title}</h1> 
        <img src='${element.image}' class='images images${i}'/>
        <h2 class='productPrice productPrice${i}'>${element.price}$</h2>
        <p class='productDescription productDescription${i}'>${element.description}</p>
        <button class="addToCart" >Add To Cart </button>
        
    `;

  container.append(divdata);
});
