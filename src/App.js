
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CarWidget from './components/CarWidget';
import './App.css';



const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer  mensaje="Esta es una tienda de animes"/>
      


    </div>
  )
}

export default App;
