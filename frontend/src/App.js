import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';
import OrdersPD from './pages/OrdersPD/Orderspd'
import Profile from './pages/Profile/Profile'
import OrdersKX from './pages/OrdersKX/OrdersKX';
import Products from './pages/Products/Products';
import ProductsPD from './pages/ProductsPD/ProductsPD';
import ProductsKX from './pages/ProductsKX/ProductsKX';
import Suppliers from './pages/Suppliers/Suppliers';
import CreateSupplier from './pages/CreateSupplier/CreateSupplier'
import Login from './pages/Login/Login';
import CreateOrdersKX from './pages/CreateOrdersKX/CreateOrdersKX';
import CreateOrdersPD from './pages/CreateOrdersPD/CreateOrdersPD';
import CreateProductsKX from './pages/CreateProductsKX/CreateProductsKX';
import CreateProductsPD from './pages/CreateProductsPD/CreateProductsPD';
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route exact to path='/' element={<Login/>} />
    <Route exact to path='/Home' element={<Home />} />
    <Route exact to path='/Orders' element={<Orders/>}/>
    <Route exact to path='/OrdersPD' element={<OrdersPD/>} />
    <Route exact to path='/Profile' element={<Profile/>} />
    <Route exact to path='/OrdersKX' element={<OrdersKX/>} />
    <Route exact to path='/Products' element={<Products/>} />
    <Route exact to path='/ProductsPD' element={<ProductsPD/>} />
    <Route exact to path='/ProductsKX' element={<ProductsKX/>}/>
    <Route exact to path='/Suppliers' element={<Suppliers/>} />
    <Route exact to path='/CreateSupplier' element={<CreateSupplier/>} />
    <Route exact to path='/CreateOrdersKX' element={<CreateOrdersKX/>} />
    <Route exact to path='/CreateOrdersPD' element={<CreateOrdersPD/>} />
    <Route exact to path='/CreateProductsKX'element={<CreateProductsKX/>} />
    <Route exact to path='/CreateProductsPD' element={<CreateProductsPD/>} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
