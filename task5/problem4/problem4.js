const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Mouse", price: 20, category: "Electronics" },
  { name: "Keyboard", price: 50, category: "Electronics" },
  { name: "Monitor", price: 300, category: "Electronics" },
  { name: "USB Cable", price: 10, category: "Accessories" },
  { name: "Headphones", price: 80, category: "Electronics" },
  { name: "Webcam", price: 70, category: "Electronics" },
  { name: "Speaker", price: 150, category: "Electronics" },
  { name: "Charger", price: 25, category: "Accessories" },
  { name: "Smartphone", price: 900, category: "Electronics" },
];

function displayProducts(products) {
  clearList();
  if (products.length === 0) {
    const list = document.getElementById("productsList");
    const li = document.createElement("li");
    const h6 = document.createElement("h6");
    const content = document.createTextNode("No results found");
    h6.appendChild(content);
    li.appendChild(h6);
    list.appendChild(li);
  }
  products.forEach((element) => {
    const list = document.getElementById("productsList");
    const li = document.createElement("li");
    const name = document.createElement("h6");
    const price = document.createElement("h6");
    const category = document.createElement("h6");
    const hr = document.createElement("hr");

    const nameContent = document.createTextNode(element.name);
    const priceContent = document.createTextNode(element.price);
    const categoryContent = document.createTextNode(element.category);

    name.appendChild(nameContent);
    price.appendChild(priceContent);
    category.appendChild(categoryContent);

    li.appendChild(name);
    li.appendChild(price);
    li.appendChild(category);
    li.appendChild(hr);

    list.appendChild(li);
  });
}

displayProducts(products);

function clearList() {
  const list = document.getElementById("productsList");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue),
  );

  displayProducts(filtered);
});
