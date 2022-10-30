import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    console.log(id)
    
    return ( <Container>
                <h1>Detalle de producto</h1>
            </Container> );
}
 
export default ItemDetailContainer;