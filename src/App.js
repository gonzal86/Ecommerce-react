import './App.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
