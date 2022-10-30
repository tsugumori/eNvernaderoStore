import './App.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemList/ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/32006.svg';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

function App() {
  
  return ( 
  
    <BrowserRouter>    
      <CartProvider>      
        <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={'Bienvenidos a mi tienda'} /> } />
            <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Productos de '} /> } />
            <Route path='/item/:id' element={ <ItemDetailContainer/> } />
            <Route path='/cart' element={ <Cart /> } />
          </Routes>
          <div className="App">
          <h1 className="Inicio">e-Nvernadero Store </h1>
            <img src={logo} className="App-logo" alt="logo" />
            <header className="App-header">         
            </header>
          </div> 
      </CartProvider>         
    </BrowserRouter>  
  
  );
}

export default App;
