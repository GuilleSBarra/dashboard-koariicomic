import Header from './components/partials/Header';
import PaginaProductos from './components/PaginaProductos';
import PaginaUsuarios from './components/PaginaUsuarios';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        < Route path='/products' element ={ < PaginaProductos />} />
        < Route path = '/users' element ={< PaginaUsuarios/>} />
      </Routes>
    </div>
  );
}
export default App;
