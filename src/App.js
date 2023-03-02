import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewArrivals from './components/NewArrivals';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import HomeContent from './components/HomeContent';
import Admin from './components/admin/Admin';
import CreateProduct from './components/admin/CreateProduct';
import ListProduct from './components/admin/ListProduct';
import ListUser from './components/admin/ListUser';
import UpdateProduct from './components/admin/UpdateProduct';
import Shop from './components/Shop';


function App() {
  return (

    <div className="">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeContent />} />
          <Route path='newArrivals' element={<NewArrivals />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='women' element={<Women />} />
          <Route path='men' element={<Men />} />
          <Route path='kids' element={<Kids />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shoppingCart' element={<ShoppingCart />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index/>
          <Route path='createProduct' element={<CreateProduct />}></Route>
          <Route path='listProduct' element={<ListProduct />}></Route>
          <Route path='listUser' element={<ListUser />} />
          <Route path='updateProduct' element={<UpdateProduct/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
