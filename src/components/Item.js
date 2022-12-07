import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { Link } from "react-router-dom";

const Item = ({id, title, stock, price, pictureUrl, description}) => {
    return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img className="imagenes" src={pictureUrl} />
      <Card.Body>
        <Card.Title className="titulo-card">{title}</Card.Title>
        <Button  className="button-card" variant="primary"> <Link to={`/item/${id}`}>Ver detalle </Link></Button>
      </Card.Body>
    </Card>
    
    
  );
}

export default Item;


