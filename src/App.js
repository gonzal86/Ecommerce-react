import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Cartcompra from './components/Cart/Cartcompra';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to="/Home" />} />
          <Route path='/home' element={<Home />}></Route>
          <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
          <Route path='/detalle/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart/' element={<Cartcompra />}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
