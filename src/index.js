import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { ProductsProvider } from './context/ProductsContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </Provider>
  </React.StrictMode>
);
