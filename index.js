
const products = [
    {
        name: 'Product 1',
        category: 'Electronics',
        price: 799.99,
        available: true,
    },
    {
        name: 'Product 2',
        category: 'Books',
        price: 19.99,
        available: true,
    },
    {
        name: 'Product 3',
        category: 'Home & Kitchen',
        price: 49.99,
        available: false,
    },
    {
        name: 'Product 4',
        category: 'Toys & Games',
        price: 29.99,
        available: true,
    },
    {
        name: 'Product 5',
        category: 'Electronics',
        price: 599.99,
        available: true,
    },
    {
        name: 'Product 6',
        category: 'Books',
        price: 9.99,
        available: true,
    },
];

const productsContainer = document.getElementById('products');
const categorySelect = document.getElementById('category');
const availableSelect = document.getElementById('available')
const priceSelect = document.getElementById('price')
function renderProductToUI(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
        <p>${product.available ? 'Available' : 'Out of Stock'}</p>
      `;
        productsContainer.appendChild(productDiv);
    });
}

function applyFilters() {
    const selectedCategory = categorySelect.value;
    const selectedAvailability = availableSelect.value;
    const selectedPrice = priceSelect.value;

    let filteredProducts = products;

    if (selectedCategory !== 'All') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (selectedAvailability === 'Available') {
        filteredProducts = filteredProducts.filter(product => product.available);
    } else if (selectedAvailability === 'NotAvailable') {
        filteredProducts = filteredProducts.filter(product => !product.available);
    }

    if (selectedPrice === '20') {
        filteredProducts = filteredProducts.filter(product => product.price < 20);
    } else if (selectedPrice === '100') {
        filteredProducts = filteredProducts.filter(product => product.price < 100);
    } else if (selectedPrice === '100+') {
        filteredProducts = filteredProducts.filter(product => product.price >= 100);
    }

    renderProductToUI(filteredProducts);
}

categorySelect.addEventListener('change', applyFilters);
availableSelect.addEventListener('change', applyFilters);
priceSelect.addEventListener('change', applyFilters);

renderProductToUI(products);