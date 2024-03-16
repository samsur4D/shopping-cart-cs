import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const[products ,setProducts ] = useState([]);

const[cart,setCart] = useState([]);

     useEffect(()=>{
      fetch('./fakedata.json')
      .then(res => res.json())
      .then(data =>{setProducts(data)})
     },[]);

// dlt koarar jnno
const handelDelete = (id) =>{
     const newCart = cart.filter(item => item.id != id) ;
     setCart(newCart);
}



// add korar jnno
const handelCart = (p) =>{
        const isExist = cart.find(item=>item.id==p.id);
        if(!isExist){
          setCart([...cart,p])
        }else{
          toast(' 🤧Already in exist,SORRY !! 😔')
        }
}
    console.log(cart);




  return (
    <>
      <div className="main-container">
{/* --------------------------------- */}
 

<div className="cards-container">
     
{
  products.map(pd=><SingleProduct key={pd.id} product={pd} handelCart={handelCart}></SingleProduct> )
 }


      
     
</div>
{/* --------------------------- */}



<div className="cart-container">
    <h1>This is carts</h1>
          <div className="cart-title">
            <h5>name:</h5>
            <h5>Price:</h5>
          </div>
          <div >
                    {
                      cart.map((item , index) =>(
                         <div className="cart-info">
                          <p className='mt-5 p-3 font-bold'>{index+1}</p>
                              <h5 className='mt-5 p-3 font-bold'>{item.title.slice(0,11)}</h5>
                             <h5 className='mt-5 p-3 font-bold'>${item.price}</h5>
                             <button onClick={() => handelDelete(item.id)} className='bg-red-300 rounded-xl p-3 mt-6'>Delete</button>
                         </div>
                      ))
                    }
          </div>
</div>
 {/* ---------------------- */}
      </div>
      <ToastContainer />
    </>
  )
}

export default App
