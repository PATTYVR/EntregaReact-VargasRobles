
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CarWidget from './components/CarWidget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/CartContext';



const App = () => {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' element= {<ItemListContainer/>} />
        <Route path = '/category/:idCategory' element= {<ItemListContainer />} />
        <Route path = '/item/:idProducto' element= {<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
