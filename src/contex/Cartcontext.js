import React, { createContext, useContext, useEffect, useState } from 'react'

import { AuthContext } from './AuthContext';
import axios from 'axios'

// import Products from './../components/Products/Products';


export const CartContext=createContext()

export default function CartcontextProvider({children}) {
   const {token}= useContext(AuthContext)

const [numOfCartItems, setnumOfCartItems] = useState(0);
const [totalCartPrice, settotalCartIPrice] = useState(0);
const [allProduct, setallProudect] = useState([]);
const [cartId, setcartId] = useState([]);


 async function  addProudectToCart( productId) {
  try{

  const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
 "productId":productId
    },{headers:{token:localStorage.getItem(`tkn`)}})

    getUserCard()
 return data ;
  }

 catch(e){
        console.log(e);
    }
    
} 


 function getUserCard(){
    
    axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
        headers:{ token:localStorage.getItem('tkn')}
    })
    .then((res)=>{
         
        setcartId(res.data.data._id)
         localStorage.setItem('userId',res.data.data.cartOwner)
        setallProudect(res.data.data.products)
        settotalCartIPrice(res.data.data.totalCartPrice)
        setnumOfCartItems(res.data.numOfCartItems)
      
        
        
    })
    .catch((e)=>{
        console.log(e);
    })
 }

  async function updateCount(id ,nuwCount) {
  const bolean= await  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      "count":nuwCount
   },{ headers:{ token:localStorage.getItem('tkn')}}).then((res)=>{
      settotalCartIPrice(res.data.data.totalCartPrice)
      setallProudect(res.data.data.products)
      setnumOfCartItems(res.data.numOfCartItems)
         
      return true
   })
   .catch((e)=>{
      console.log(e);
      return false
   })     
   return bolean

   
   
 }
 
async function deleteproduct(id) {
 const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
 { headers : { token:localStorage.getItem( 'tkn' )}})
   .then((res)=>{
      settotalCartIPrice(res.data.data.totalCartPrice)
      setallProudect(res.data.data.products)
      setnumOfCartItems(res.data.numOfCartItems)
      return true
   })
   .catch((e)=>{
      console.log(e)
      return false});
      return res;
}
async function clearCart() {
 const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
 { headers : { token:localStorage.getItem( 'tkn' )}})
   .then((res)=>{
      settotalCartIPrice(0)
      setallProudect([])
      setnumOfCartItems(0)
// numOfCartItems(0);
// totalCartPrice(0);
// allProduct([]);

      return true
   })
   .catch((e)=>{
      console.log(e)
      return false});
      return res;
}

 useEffect(()=>{
   //  console.log("gitngdsddddddd");
    getUserCard();
 },
 [token]
 );

    
  return <CartContext.Provider value={{addProudectToCart,getUserCard,clearCart,cartId,updateCount, deleteproduct,numOfCartItems,totalCartPrice, allProduct}}>
  {children}
   </CartContext.Provider>
}
