import React, { useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/CatalogPage.css';
import { ProductsContext } from '../context/ProductsContext';

const CatalogPage = () => {
  const { products } = useContext(ProductsContext);
  const [sort, setSort] = useState('popular');
  const [search, setSearch] = useState('');

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>Our Gem Collection</h1>
        <p>Explore our exquisite selection of precious and semi-precious gemstones</p>
      </div>

      <div className="catalog-filters">
        <div className="filter-group">
          <label>Search:</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Search name or description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <select
            className="filter-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((gem) => (
            <ProductCard
              key={gem.id}
              id={gem.id}
              name={gem.name}
              carat={gem.carat}
              price={gem.price}
              description={gem.description}
            />
          ))
        ) : (
          <div className="no-products">No products found</div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
