import logo from './32006.svg';
import './App.css';
import './components/CartWidget.css';
import './components/ItemListContainer.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

 
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <div className="App">
       <h1 className="Inicio">e-Nvernadero Store </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">         
        </header>
      </div>
    </>
  );
}

export default App;
