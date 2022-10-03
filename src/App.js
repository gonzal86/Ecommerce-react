import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import CartView from './components/Cart/CartView';
import { CartProvider } from './components/Cart/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/categoria/:categoria' element={<ItemListContainer />}></Route>
            <Route path='/detalle/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/Cart/' element={<CartView />}></Route>
            <Route path='/Checkout/' element={<Checkout/>}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
