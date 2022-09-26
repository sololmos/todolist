import logo from './imagenes/logo.png'
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'  >
        <div className='logo-contenedor' >
          <img className='logo'
         
          src={logo }
          alt= 'logo'
          />
        </div>

        <div className='tareas-lista'>
          <h1>Mis tareas</h1>
          <ListaDeTareas/>
          
          
        </div>
    </div>
  );
}

export default App;
