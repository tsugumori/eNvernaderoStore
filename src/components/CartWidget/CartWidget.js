import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { BsMinecart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    return ( 
      <>
        <Link to='/cart'>
          < BsMinecart />
        </Link>
        {totalQuantity > 0 && (
        <Badge id='cantidad' pill bg="success">{ totalQuantity }</Badge>
        )}
      </>
       
     );
}
 
export default CartWidget;