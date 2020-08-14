import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import Rating from '../components/Rating';

const ProductContainer = props => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector(state => state.productDetails);
  const { product } = productDetails;
  const productReviewSave = useSelector(state => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productSaveSuccess) {
      setRating(1);
      setComment('');
      productReviewSave.success = false;
    }
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [dispatch, productReviewSave.success, productSaveSuccess, props.match.params.id]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.user.first_name + ' ' + userInfo.user.last_name,
        rating: rating,
        comment: comment,
      })
    );
  };

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <div>
      <div className='back-to-results'>
        <Link to='/'>Back to results</Link>
      </div>

      {!product ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='details'>
            <div className='details-image'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='details-info'>
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  <a href='#reviews'>
                    <Rating value={product.rating} text={product.numReviews + ' Reviews'} />
                  </a>
                </li>
                <li>
                  Price:<b> ${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className='details-action'>
              <ul>
                <li>Price: ${product.price}</li>
                <li>Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</li>
                {product.countInStock > 0 ? (
                  <li>
                    Qty:{' '}
                    <select
                      value={qty}
                      onChange={e => {
                        setQty(e.target.value);
                      }}>
                      {[...Array(product.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </li>
                ) : (
                  <li></li>
                )}
                <li>
                  {product.countInStock > 0 ? (
                    <button onClick={handleAddToCart} className='button primary'>
                      Add To Cart
                    </button>
                  ) : (
                    <div></div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className='content-margined'>
            <hr />
            <h2>Reviews</h2>
            {!product.reviews ? (
              <div>There are no reviews</div>
            ) : (
              <div>
                <ul className='review' id='reviews'>
                  {product.reviews.map(review => (
                    <li key={review.id}>
                      <div>
                        {review.name} - {review.created_at.substring(0, 10)}
                      </div>

                      <div>
                        <Rating value={review.rating} />
                      </div>
                      <div>{review.comment}</div>
                    </li>
                  ))}
                  <li>
                    <h3>Add A Review</h3>
                    {userInfo ? (
                      <form onSubmit={submitHandler}>
                        <ul className='form-container'>
                          <li>
                            <label htmlFor='rating'>Rating</label>
                            <select name='rating' id='rating' value={rating} onChange={e => setRating(e.target.value)}>
                              <option value='1'>1 - Poor</option>
                              <option value='2'>2 - Fair</option>
                              <option value='3'>3 - Good</option>
                              <option value='4'>4 - Very Good</option>
                              <option value='5'>5 - Excellent</option>
                            </select>
                          </li>
                          <li>
                            <label htmlFor='comment'>Comment</label>
                            <textarea name='comment' value={comment} onChange={e => setComment(e.target.value)} />
                          </li>
                          <li>
                            <button type='submit' className='button primary'>
                              Submit Comment
                            </button>
                          </li>
                        </ul>
                      </form>
                    ) : (
                      <div>
                        Please <Link to='/signin'>Sign In</Link> to write a review.
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductContainer;
