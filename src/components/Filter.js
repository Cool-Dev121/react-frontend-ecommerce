import React from 'react';
import { connect, useSelector } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';

const Filter = props => {
  // const [category, setCategory] = useState('');
  const productList = useSelector(state => state.productList);
  const { category, products, filteredProducts } = productList;

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div>
      <ul className='filter'>
        <li>
          <form onSubmit={submitHandler}>
            <input type='text' name='searchKeyword' onChange={e => props.filterProducts(products, e.target.value)} />
            <button type='submit'>Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name='sortOrder' onChange={e => props.sortProducts(filteredProducts, e.target.value)}>
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </li>
      </ul>
      {category && category !== 'All' ? (
        <div className='filter-header'>
          <h2>{category}</h2>
          <hr />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default connect(null, { filterProducts, sortProducts })(Filter);
