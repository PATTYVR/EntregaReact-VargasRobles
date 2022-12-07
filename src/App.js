
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CarWidget from './components/CarWidget';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/' element= {<ItemListContainer/>} />
        <Route path = '/category/:idCategory' element= {<ItemListContainer />} />
        <Route path = '/item/:idProducto' element= {<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
