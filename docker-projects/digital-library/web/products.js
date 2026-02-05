const products = [
  {
    id: 1,
    title: "Linux PDF",
    price: 199,
    thumbnail: "/assets/linux.jpg",
    file: "website1/content/pdfs/"
  },
  {
    id: 2,
    title: "AWS PDF",
    price: 299,
    thumbnail: "/assets/aws.jpg",
    file: "website1/content/pdfs/"
  },
  {
    id: 3,
    title: "DevOps Video",
    price: 499,
    thumbnail: "/assets/devops.jpg",
    file: "website1/content/videos/"
  }
];

const container = document.querySelector(".products");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.thumbnail}">
    <h3>${p.title}</h3>
    <p>₹${p.price}</p>

    <button onclick="add('${p.title}', ${p.price})">
      Add to Cart
    </button>

    <a href="${p.file}" target="_blank" class="preview">
      ▶ Open Content
    </a>
  `;

  container.appendChild(card);
});
