import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap';
import Menu from './components/navbar/navbar';
import AppRoutes from './components/router/router';



// login --> Función para llamar los componentes
function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;
