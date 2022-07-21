
import './App.css';
import Home from './Components/Home';
import NavComponent from './Components/NavComponent';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getProductItems } from './Features/CartSlice';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './Components/Cart';

function App() {
   const dispatch = useDispatch()
     
   useEffect(()=>{
     dispatch(getProductItems())
   },[])
  return (
    <div className="App">
       <BrowserRouter>
       <NavComponent/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Routes>  
       </BrowserRouter>
    </div>
  );
}

export default App;
