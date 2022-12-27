import Container from 'react-bootstrap/Container';
import { useContext, useState } from "react";
import {ImgContainer,ImageDetail} from './styledComponents';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../App.css';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';



const ItemDetail =({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart } = useContext(CartContext);
 

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
    addToCart(item, qty);
}

    return (

      <> 
      {
        item && item.image
      ?
    
        <Container fluid>
          <div>
          <ImgContainer >
             <ImageDetail src={item.image} />
            </ImgContainer>
            <div className='titulo-detalle'>{item.name}</div>
            <div>Descripcion del producto:{item.description}</div>
            <div>{item.stock} unidades en stock</div>
            <div>{item.price} soles</div>          
          </div>
          {
            itemCount ===0
            ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            : <Link to= '/cart' ><Button variant="primary" >CheckOut</Button></Link>

          }
        </Container>
        :<p>Cargando...</p>
        }
        </>

      );
    }


export default ItemDetail;

    
