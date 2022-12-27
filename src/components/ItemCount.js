import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const[count, setCount] = useState(0);

    useEffect (() => {
        setCount(initial);
    }, []);

    const increment = () => {
        if (count < stock ) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if ( count > initial+1) {
            setCount(count - 1);
        }
    }



    return (
        <div>
            <Button variant="primary" onClick={increment}><AddIcon /></Button>{' '}
            <div>{count}</div>
            <Button variant="primary" onClick={decrement}><RemoveIcon /></Button>{' '}

            {
                stock && count 
                ? <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button> 
                :<Button variant="primary" disabled>Agregar al carrito</Button>
            }
        

        </div>
    );
}

export default ItemCount;