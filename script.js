
const products = [
  { name: 'White Sneakers', category: 'Shoes' },
  { name: 'Denim Jacket', category: 'Clothes' },
  { name: 'Black Hoodie', category: 'Clothes' },
  { name: 'Running Shoes', category: 'Shoes' },
];

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search');

function renderProducts(items) {
  productList.innerHTML = items.map(p => \`<div><h3>\${p.name}</h3><p>\${p.category}</p></div>\`).join('');
}

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  renderProducts(filtered);
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

renderProducts(products);
