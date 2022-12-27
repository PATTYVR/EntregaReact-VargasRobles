import { useContext, useEffect} from "react";
import { CartContext } from "./CartContext";
//import Badge  from '@mui/material/Badge';
//import Badge from 'react-bootstrap/Badge';
import { Badge, Button } from "@mui/material";


import { ShoppingCartOutlined } from "@mui/icons-material";




//<div className="iconoCar"><ion-icon name="cart-outline"></ion-icon></div>
const CarWidget = () => {
    const test = useContext (CartContext);

    return (
        <div>
        <Badge  badgeContent={test.calcItemsQty()} color="secondary">
        <Button variant="outlined"><ShoppingCartOutlined /></Button>
        </Badge>
        </div>
    );
}

export default CarWidget;



