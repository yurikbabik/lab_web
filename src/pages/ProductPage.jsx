import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { getProductById } from '../services/api';
import PrimaryButton from '../components/PrimaryButton';
import Loader from '../components/Loader';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError('Failed to load product. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart!`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error || !product) {
    return (
      <div className="catalog-page">
        <h2>{error || 'Product not found'}</h2>
        <Link to="/catalog">Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>

      <div className="product-detail">
        <div className="product-detail-card">
          <div className="product-image" style={{ height: 260 }}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ maxHeight: '100%', width: 'auto' }} />
            ) : (
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={`detail-${product.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
                <polygon points="100,40 160,100 100,160 40,100" fill={`url(#detail-${product.id})`} />
                <ellipse cx="85" cy="70" rx="15" ry="20" fill="white" opacity="0.4" />
              </svg>
            )}
          </div>

          <div className="product-info">
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Carat:</strong> {product.carat}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Type:</strong> {product.type}</p>
            <p>{product.description}</p>
            
            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="view-cart-btn" onClick={() => navigate('/cart')}>
                View Cart
              </button>
            </div>
            
            <Link to="/catalog">Back to catalog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
