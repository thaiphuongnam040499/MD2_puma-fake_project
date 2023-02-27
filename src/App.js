import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Collaborations from './components/Collaborations';
import Sport from './components/Sport';
import Sale from './components/Sale';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';


function App() {
  return (
    
<div className="">
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/newArrivals' element={<NewArrivals/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/collaborations' element={<Collaborations/>}/>
      <Route path='/sport' element={<Sport/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/shoppingCart' element={<ShoppingCart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  <Footer/>
</div>

  
  );
}

export default App;
