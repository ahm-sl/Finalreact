// import Cart from './../components/Cart/Cart';

import {Navigate,} from 'react-router-dom'

export default function Card({children}) {
if (localStorage.getItem(`tkn`)==null) {
    
   return <Navigate to='/Login' />
    
}
    
  return <>{children}</>
    
  
}
