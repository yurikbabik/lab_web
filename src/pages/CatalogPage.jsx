import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import '../styles/CatalogPage.css';
import { getProducts } from '../services/api';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState('popular');
  const [search, setSearch] = useState('');

  // Fetch products with filters when sort or search changes
  useEffect(() => {
    const fetchFiltered = async () => {
      try {
        setLoading(true);
        const filters = {};
        
        if (sort && sort !== 'popular') {
          filters.sort = sort === 'price-low' ? 'price-asc' : sort === 'price-high' ? 'price-desc' : sort;
        }
        
        if (search.trim()) {
          filters.search = search;
        }
        
        const data = await getProducts(filters);
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch filtered products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFiltered();
  }, [sort, search]);

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>Our Gem Collection</h1>
        <p>Explore our exquisite selection of precious and semi-precious gemstones</p>
      </div>

      {loading && <Loader />}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <>
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
        </>
      )}
    </div>
  );
};

export default CatalogPage;
