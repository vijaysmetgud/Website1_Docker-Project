let count = 0;
let total = 0;

function add(name, price) {
  count++;
  total += price;

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;
}

const container = document.querySelector(".products");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.thumbnail}">
    <h3>${product.title}</h3>
    <p>₹${product.price}</p>
    <button onclick="add('${product.title}', ${product.price})">
      Add to Cart
    </button>
    <br><br>
    <a href="${product.file}" target="_blank">Preview</a>
  `;

  container.appendChild(card);
});
