import './App.css';
import Navbar from './componets/Navbar/Navbar';
import CartWidget from './componets/CartWidget/CartWidget';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <CartWidget/>
      <header className="App-header">
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos a Potterland"}/>
      </header>
    </div>
  );
}

export default App;
