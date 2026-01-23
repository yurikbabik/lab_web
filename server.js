const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const products = [
  { id: 1, name: 'Ruby', carat: 1.2, price: 1200, color: 'red', type: 'precious', description: 'Deep red ruby gemstone with exceptional brilliance', image: '/images/ruby.svg' },
  { id: 2, name: 'Emerald', carat: 0.8, price: 900, color: 'green', type: 'precious', description: 'Vivid green emerald with perfect clarity', image: '/images/emerald.svg' },
  { id: 3, name: 'Sapphire', carat: 1.5, price: 1500, color: 'blue', type: 'precious', description: 'Stunning blue sapphire with rich color', image: '/images/sapphire.svg' },
  { id: 4, name: 'Amethyst', carat: 2.0, price: 800, color: 'purple', type: 'semi-precious', description: 'Beautiful purple amethyst crystal' },
  { id: 5, name: 'Diamond', carat: 0.9, price: 2500, color: 'clear', type: 'precious', description: 'Premium quality diamond with VS1 clarity' },
  { id: 6, name: 'Topaz', carat: 1.8, price: 650, color: 'yellow', type: 'semi-precious', description: 'Golden topaz with warm elegant glow' },
  { id: 7, name: 'Opal', carat: 1.3, price: 950, color: 'iridescent', type: 'semi-precious', description: 'Iridescent opal with rainbow effects' },
  { id: 8, name: 'Garnet', carat: 2.2, price: 550, color: 'red', type: 'semi-precious', description: 'Deep red garnet with exceptional shine' },
  { id: 9, name: 'Aquamarine', carat: 1.6, price: 1100, color: 'blue', type: 'precious', description: 'Light blue aquamarine with clarity' }
];

// Routes
app.get('/api/products', (req, res) => {
  const { sort, type, color, search } = req.query;
  let filteredProducts = [...products];

  // Filter by type
  if (type) {
    filteredProducts = filteredProducts.filter(p => p.type === type);
  }

  // Filter by color
  if (color) {
    filteredProducts = filteredProducts.filter(p => p.color === color);
  }

  // Filter by search text (name or description)
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort products
  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(filteredProducts);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
