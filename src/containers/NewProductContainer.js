import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, saveProduct, deleteProduct } from '../actions/productActions';

const NewProductContainer = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const productList = useSelector(state => state.productList);
  const { products } = productList;
  const productSave = useSelector(state => state.productSave);
  const productDelete = useSelector(state => state.productDelete);
  // const {} = productSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productSave.success) {
      productSave.success = false;
      setModalVisible(false);
    }
    productDelete.success = false;
    dispatch(fetchProducts());

    return () => {
      //
    };
  }, [productSave.success, productDelete.success]);

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
                <input type='text' name='name' id='name' value={name} onChange={e => setName(e.target.value)} />
              </li>
              <li>
                <label htmlFor='price'>Price</label>
                <input type='text' name='price' id='price' value={price} onChange={e => setPrice(e.target.value)} />
              </li>
              <li>
                <label htmlFor='name'>Description</label>
                <textarea
                  name='description'
                  id='description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </li>
              <li>
                <label htmlFor='image'>Image</label>
                <input type='text' name='image' id='image' value={image} onChange={e => setImage(e.target.value)} />
              </li>
              <li>
                <label htmlFor='brand'>Brand</label>
                <input type='text' name='brand' id='brand' value={brand} onChange={e => setBrand(e.target.value)} />
              </li>
              <li>
                <label htmlFor='category'>Category</label>
                <input
                  type='text'
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
                    <td>{product.price}</td>
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

export default NewProductContainer;
