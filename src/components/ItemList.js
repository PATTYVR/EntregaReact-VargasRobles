import Item from './Item';
import Container from 'react-bootstrap/Container';
import '../App.css';

const ItemList = ({ items }) => {
    return (
        <Container className='card-container'>
         {
<<<<<<< HEAD
             items.length > 0 &&
             items.map (item => <Item key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.image} stock={item.stock} 
             description={item.description}  /> )}
=======
          items.length > 0 &&
          items.map (item => <Item key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.image} stock={item.stock} description={item.description}  /> )}
>>>>>>> 617c3f1a24b9399fa73983dd22133b67986523a2
        </Container>
      );
}

export default ItemList;




