import './ItemCount.css';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

export const ItemCount = () => {
    const [count, setCount] = useState(1);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return ( 
        <div className='counter'>
            <Button size="sm" variant='secondary' disabled={count <= 1} onClick={decrease}>-</Button>
            <span>{count}</span>
            <Button size="sm" variant='secondary' disabled={count >= 10} onClick={increase}>+</Button>
            <div>
                <Button size="sm" variant='primary'>Agregar al carrito</Button>
            </div>
        </div>
     );
}
 
export default ItemCount;