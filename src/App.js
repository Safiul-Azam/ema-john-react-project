import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop'
import Login from './component/Login/Login'
import SignUp from './component/SignUp/SignUp'
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipment from './component/Shipment/Shipment';
import ManageProduct from './component/ManageProduct/ManageProduct';
import AddProduct from './component/AddProduct/AddProduct';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Shop></Shop>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/order'element={<Order></Order>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/manage-inventory" element={
         <RequireAuth>
           <Inventory></Inventory>
         </RequireAuth>
       }></Route>
       <Route path="/manage" element={<ManageProduct></ManageProduct>}></Route>
       <Route path='add-product' element={<AddProduct></AddProduct>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/shipment' element={
       <RequireAuth>
         <Shipment></Shipment>
       </RequireAuth>
      }></Route>
       <Route path='*' element={
         <div>
           <h2>This page is not found</h2>
           <h1>404</h1>
         </div>
       }></Route>
     </Routes>
    </div>
  );
}

export default App;
