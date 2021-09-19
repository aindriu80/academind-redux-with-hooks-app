import React, { useContext } from 'react';

import './Products.css';

import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from '../context/products-context';

const Products = (props) => {
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
  const productList = useContext(ProductsContext).products;
};

export default Products;
