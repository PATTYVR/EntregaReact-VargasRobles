
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import ItemDetail from "./ItemDetails";

import {products } from '../utils/products';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idProducto } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idProducto)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;


