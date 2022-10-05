import { Card, CardImg } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";

const Item = ( {product} ) => {
    return ( 
      <Card style={ {width: '18rem'} }>
        <Link to={`/item/${product.id}`}>
          <CardImg variant="top" src={product.pictureUrl} />
        </Link>
        <Card.Body>
          <Card.Title> {product.title.toUpperCase()} </Card.Title>
          <Card.Text> $ {product.price} </Card.Text>
            <Card.Text> {product.description} </Card.Text>
        </Card.Body>
        <ItemCount />
      </Card>
       
    );
}
 
export default Item;