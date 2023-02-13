import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer"
import Navbar from './componets/Navbar/Navbar';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './componets/cartContext/cartContex';
import Cart from "./componets/Cart/Cart"
import Checkout from './componets/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<ItemListContainer greeting={"Listado de productos"}/>} /> 
          <Route path="/category/:categoryId"  element={<ItemListContainer />} /> 
          <Route path="/item/:productId"  element={<ItemDetailContainer/>} /> 
          <Route path="/cart"  element={<Cart/>} /> 
          <Route path="/checkout"  element={<Checkout/>} /> 

        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
