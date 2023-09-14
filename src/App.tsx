import 'bootstrap/dist/css/bootstrap.min.css'; 
//import MainNavbar from './Components/Navbar/Navbar';
import Home from './Screens/Home';
import Perfil from './Screens/Perfil';
import Cadastro_bike from './Screens/Cadastro_bike';
import Detalhes_bike from './Screens/Detalhes_bike';

function App() {
  return (
    <div className="App">
     <Home/>
     <Perfil/>
     <Cadastro_bike/>
     <Detalhes_bike/>
    </div>
    
  );
}

export default App;
