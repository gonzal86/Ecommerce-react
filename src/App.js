import './App.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
    </div>
  );
}

export default App;
