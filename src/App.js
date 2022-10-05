import logo from './32006.svg';
import './App.css';
import './components/CartWidget/CartWidget.css';
import './components/ItemList/ItemListContainer.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'Bienvenidos a mi tienda'} /> } />
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Productos de '} /> } />
        <Route path='/item/:id' element={ <ItemDetailContainer/> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/checkout' element={ <Checkout /> } />
      </Routes>
      <div className="App">
       <h1 className="Inicio">e-Nvernadero Store </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">         
        </header>
      </div>      
    </BrowserRouter>
  );
}

export default App;
