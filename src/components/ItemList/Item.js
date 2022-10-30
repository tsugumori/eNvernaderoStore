import { Card, CardImg, Button, Collapse } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Item.css';

import React, { useState } from 'react';


const Item = ( {product} ) => {
  const [open, setOpen] = useState(false);
    return ( 
      <Card className="card-body" style={ {width: '18rem'} }>
        <Link to={`/item/${product.id}`}>
          <CardImg id="img" variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Card.Title id="title" className="card-title"> {product.title.toUpperCase()} </Card.Title>
          <Card.Text id="price" className="card-text text-primary"> $ {product.price} </Card.Text>

           <Button className="btnDescription"
              onClick={() => setOpen(!open)}
              aria-controls="text"
              aria-expanded={open}>
              Detalle
            </Button>
            <Collapse in={open}>
              <Card.Text id="text" className="card-text text-secondary"> {product.description} </Card.Text>
            </Collapse>
            
        </Card.Body>
      </Card>
    );
}
 
export default Item;