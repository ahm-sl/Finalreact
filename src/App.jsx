import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'

import AllOrders from './components/AllOrders/AllOrders';
import { AuthContextProvider } from './contex/AuthContext';
import Brands from './components/Brands/Brands';
import Card from './Card/Card';
import Cart from './components/Cart/Cart';
import CartcontextProvider from './contex/Cartcontext';
import Categories from './components/Categories/Categories';
import Layout from './components/layout/Layout'
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import { Offline } from 'react-detect-offline';
import Payto from './components/Payto/Payto';
// import Payment from './components/Payment/Payment';
import ProductDitials from './components/ProductDitials/ProductDitials';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import React from 'react'
import Register from './components/Register/Register';
import { Toaster } from 'react-hot-toast';

const myRouter =createHashRouter([
{path:`/`,element:<Layout/>,children:[


  {index:true ,element:<Products/>},
  {path:`Register`,element:<Register/>},
  {path:`Login`,element:<Login/>},
  {path:`Product`,element:<Products/>},
  {path:`Cart`,element:<Card>
     <Cart /> 
     </Card> },
  {path:`Categories`,element:<Card> <Categories /> </Card>},
  {path:`Payto`,element:<Card> <Payto/> </Card>},
  {path:`Brands`,element:<Card> <Brands/> </Card>},
  {path:`AllOrders`,element:<Card> <AllOrders/> </Card>},
  {path:`Profile`,element:<Card> <Profile/> </Card>},
  
  {path:`ProductDitials/:id`,element:<Card> <ProductDitials /> </Card>},
  {path:`*`,element:<Notfound/>}  


  
]}


  
])
export default function App() {
  const myclient=new QueryClient()
  return <>
    
  
  
<QueryClientProvider client={myclient}>

<AuthContextProvider>
  <CartcontextProvider>
    
  <RouterProvider router={myRouter} />
      
  </CartcontextProvider>
    </AuthContextProvider>
  
</QueryClientProvider>

<Toaster/>

<Offline>

  <div className='bg-dark fixed-bottom text-center text-danger'> your internet connction has been corrupted.... </div>
</Offline>
  </>
    
  
}
