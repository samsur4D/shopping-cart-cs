import React from 'react';

const SingleProduct = ({product,handelCart}) => {
    // console.log(handelCart);
    return (
        <div>
            
             <div className="card">
                  <img className='card-img' src={product.image} alt="" />
                  <h1>{product.title.slice(0,11)}</h1>
                  <p>{product.description}</p>
                  <div className="card-footer flex">
                         <h3>${product.price}</h3>
                         <button onClick={(e)=>handelCart(product)} className='add-btn bg-slate-400 p-3 rounded-xl'>Add to Cart</button>
                  </div>

       </div>
        </div>
    );
};

export default SingleProduct;