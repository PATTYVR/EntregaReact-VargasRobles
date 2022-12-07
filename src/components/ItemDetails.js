import Container from 'react-bootstrap/Container';
import {ImgContainer,ImageDetail} from './styledComponents';
import '../App.css';


const ItemDetail =({ item }) => {

    return (
        <Container fluid>
          <div>
          <ImgContainer >
             <ImageDetail src={item.image} />
            </ImgContainer>
            <div className='titulo-detalle'>{item.name}</div>
            <div>Descripcion del producto:{item.description}</div>
            <div>{item.stock} unidades en stock</div>
            <div>{item.price} soles</div>
            <button>Agregar al carrito</button>
          </div>
        </Container>
      );
    }


export default ItemDetail;

    
