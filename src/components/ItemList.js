import Item from './Item';
import Container from 'react-bootstrap/Container';
import '../App.css';

const ItemList = ({ items }) => {
    return (
        <Container className='card-container'>
         {
         items.map (item => <Item key={item.id} id={item.id} title={item.name} price={item.price} pictureUrl={item.image[0]} stock={item.stock} description={item.description}  /> )}
        </Container>
      );
}

export default ItemList;




