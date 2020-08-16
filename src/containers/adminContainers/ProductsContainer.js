import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, saveProduct, deleteProduct } from '../../actions/productActions';
import formatCurrency from '../../util';

const ProductsContainer = props => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const productList = useSelector(state => state.products);
  const { products } = productList;

  useEffect(() => {
    if (productList.success) {
      productList.success = false;
      setModalVisible(false);
    }
    dispatch(fetchProducts());

    return () => {
      //
    };
  }, [dispatch, productList.success]);

  const openModal = product => {
    setModalVisible(true);
    setId(product.id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setDescription(product.description);
    setBrand(product.brand);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };

  const submitHandler = event => {
    event.preventDefault();
    dispatch(saveProduct({ id, name, price, image, brand, category, description, countInStock }));
  };

  const deleteHandler = product => {
    dispatch(deleteProduct(product));
  };

  return (
    <div className='content content-margined'>
      <div className='product-header'>
        <h3>Products</h3>
        <button className='button primary' onClick={() => openModal({})}>
          Create Product
        </button>
      </div>

      <div className='form'>
        {modalVisible ? (
          <form onSubmit={submitHandler}>
            <ul className='form-container'>
              <li>
                <h2>Create Product</h2>
              </li>
              <li>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  required
                  name='name'
                  id='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='price'>Price</label>
                <input
                  type='text'
                  required
                  name='price'
                  id='price'
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='name'>Description</label>
                <textarea
                  name='description'
                  required
                  id='description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='image'>Image</label>
                <input
                  type='text'
                  required
                  name='image'
                  id='image'
                  value={image}
                  onChange={e => setImage(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='brand'>Brand</label>
                <input
                  type='text'
                  required
                  name='brand'
                  id='brand'
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='category'>Category</label>
                <input
                  type='text'
                  required
                  name='category'
                  id='category'
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='countInStock'>Count In Stock</label>
                <input
                  type='text'
                  required
                  name='countInStock'
                  id='countInStock'
                  value={countInStock}
                  onChange={e => setCountInStock(e.target.value)}
                />
              </li>
              <li>
                <button type='submit' className='button primary'>
                  {id ? 'Update Product ' : 'Create Product'}
                </button>
              </li>
              <li>
                <button type='button' onClick={() => setModalVisible(false)} className='button secondary'>
                  Back
                </button>
              </li>
            </ul>
          </form>
        ) : (
          <div className='product-list'>
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{formatCurrency(product.price)}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <button className='button' onClick={() => openModal(product)}>
                        Edit
                      </button>{' '}
                      <button className='button' onClick={() => deleteHandler(product)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
