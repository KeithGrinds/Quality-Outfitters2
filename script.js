// PRODUCT DATA (Mock DB)
const products = [
  { name: "Black Hoodie", price: 40, img: "https://via.placeholder.com/300" },
  { name: "White Tee", price: 25, img: "https://via.placeholder.com/300" },
  { name: "Minimal Jacket", price: 80, img: "https://via.placeholder.com/300" }
];

// RENDER PRODUCTS
const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.img}" />
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;

  container.appendChild(card);
});

// GLOW CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// CART INTERACTION
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.innerText = "Added ✓";
    setTimeout(() => e.target.innerText = "Add to Cart", 1500);
  }
});
