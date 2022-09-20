import logo from './32006.svg';
import fondo from './Cosmos - 14244.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="Inicio">e-Nvernadero Store </h1>
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        
        
        <video src={fondo} className="Video" loop autoPlay muted></video>
        <div className="Overlay"></div>

      </header>
    </div>
  );
}

export default App;
