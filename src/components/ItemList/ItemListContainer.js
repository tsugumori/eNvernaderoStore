import "./ItemListContainer.css";
import  Container  from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllProducts, getProductsByCategory } from "../../utils/products";


const ItemListContainer = ({ greeting }) => {
    const { categoryId  } = useParams();
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        if (categoryId) {
          getProductsByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        } else {
          getAllProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        }
      }, [categoryId])

    return ( 
        <Container>
            <div className="greeting">{ greeting } { categoryId }</div>
            <ItemList products={products} />
        </Container>
     );
}
 
export default ItemListContainer;