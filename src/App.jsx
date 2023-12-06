import './App.css';
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Header from './Elements/Header'
import Auth from './Pages/Auth';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route index element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/auth' element={<Auth/>} />
     </Routes>
    </div>
  );
}

export default App;
