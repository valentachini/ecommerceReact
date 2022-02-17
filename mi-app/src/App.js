import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import NavbarCss from './components/navBar/NavbarCss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/context/cartContext';

const App = () => {
    
  return(
    <div className='hooks-app'>
      <CartContextProvider>
        <BrowserRouter> 
          <NavbarCss/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoriaId' element={<ItemListContainer/>}/>
              <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>    
            </Routes> 
        </BrowserRouter>
      </CartContextProvider>      
  
    </div>
  )
}

export default App

