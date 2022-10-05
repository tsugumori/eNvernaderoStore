import { BsMinecart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return ( 
        <Link to='/cart'>
            < BsMinecart />
        </Link>
     );
}
 
export default CartWidget;