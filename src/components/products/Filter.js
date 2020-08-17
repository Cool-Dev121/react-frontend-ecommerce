import React from 'react';
import { connect, useSelector } from 'react-redux';
import { filterProducts, sortProducts } from '../../actions/productActions';

const Filter = props => {
  const productList = useSelector(state => state.products);
  const { category, products, filteredProducts } = productList;

  const submitHandler = e => {
    e.preventDefault();
  };

  return !filteredProducts ? (
    <div>Loading...</div>
  ) : (
    <div className='filter'>
      <div className='filter-options'>
        <div className='filter-result'>{filteredProducts.length} Products</div>
        <div className='filter-search'>
          <form onSubmit={submitHandler}>
            <input type='text' name='searchKeyword' onChange={e => props.filterProducts(products, e.target.value)} />
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className='filter-sort'>
          Sort By{' '}
          <select name='sortOrder' onChange={e => props.sortProducts(filteredProducts, e.target.value)}>
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>
      </div>
      {category && category !== 'All' ? (
        <div className='filter-header'>
          <h2>{category}</h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default connect(null, { filterProducts, sortProducts })(Filter);
