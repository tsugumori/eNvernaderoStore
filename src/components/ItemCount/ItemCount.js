import { useEffect } from 'react';
import { useState } from 'react';
import './ItemCount.css';


const ItemCount = ({initial,stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const handleClick = () => {
      onAdd(count);
    }

    const handleAdd = () => {
      setCount(count + 1);
    };
    const handleSubtract = () => {
        setCount(count - 1);
    };
    
    useEffect(() =>{
      setCount(parseInt(initial));
    },[initial])

    return (
      
      <div className='row'>    
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-danger" type="button" disabled={count<=1} onClick={handleSubtract}>-</button>
            </div>

            <input type="text" id='contador' className="form-control" aria-label="" aria-describedby="basic-addon1" style={{textAlign: "center"}} value={count} disabled={count>=1}></input>

            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleAdd}>+</button>
            </div>
          </div> 
          
            <button type="button" className="btn btn-outline-dark" disabled={count>=stock} onClick={handleClick}>Agregar al carrito</button>        
        </div>
     
    );
};
 
export default ItemCount;