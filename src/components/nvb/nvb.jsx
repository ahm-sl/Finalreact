import { Link, useNavigate } from 'react-router-dom'
import React, { useContext, } from 'react'

import { AuthContext } from '../../contex/AuthContext';
import { CartContext } from '../../contex/Cartcontext';
import logo from "../../images/freshcart-logo.svg";

export default function Nvb() {

  const navg =  useNavigate()
  const {token ,settoken} = useContext(AuthContext)
  const {numOfCartItems} = useContext(CartContext)

function logout() {
settoken(null)
localStorage.removeItem(`tkn`)
navg(`/login`)
  
}



  // console.log("token.sss.:"+token );
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="nav-link " aria-current="page" to="/" ><img src={logo} alt="frish card" /></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {token?  <ul className="navbar-nav me -auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/product" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  product.btn  active " aria-current="page"  to="/Categories" >Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  active " aria-current="page"  to="/Brands" >Brand</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  active " aria-current="page"  to="/AllOrders" >All Orders</Link>
        </li>
       
        <li className="nav-item position-relative">
          <Link className="nav-link   active " aria-current="page"   to="/Cart" >Cart</Link>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {numOfCartItems?numOfCartItems:""}
  </span>
        </li>
  
      </ul>  :""}
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
      <li className="nav-item">
          <Link className="nav-link  " aria-current="page"  to="/Profile" >Profile</Link>
        </li>
        <li className="nav-item">
        <ul className='list-unstyled d-flex'>
             <li>
                <i className=' me-3 fa-brands fa-instagram '></i>
             </li>
             <li>
                <i className=' me-3 fa-brands fa-facebook '></i>
             </li>
             <li>
                <i className=' me-3 fa-brands fa-tiktok '></i>
             </li>
             <li>
                <i className=' me-3 fa-brands fa-twitter '></i>
             </li>
             <li>
                <i className=' me-3 fa-brands fa-linkedin '></i>
    
             </li>
             <li>
            
                <i className=' me-3 fa-brands fa-youtube '></i>
             </li>
             



            
        </ul>
        </li>
        
        {token?<li className="nav-item">
          <span onClick={logout} role='button' className="nav-link " aria-current="page"  >logout</span>
        </li>:<>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/login" >login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Register" >Register</Link>
        </li>
       
        
        </>}
       
        
       
      </ul>
    
    </div>
  </div>
</nav>
  
  
  
  
  
  </>
    

}
