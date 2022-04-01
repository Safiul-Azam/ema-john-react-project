import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop'

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Shop></Shop>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/order'element={<Order></Order>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/manage-inventory" element={<Inventory></Inventory>}></Route>
     </Routes>
    </div>
  );
}

export default App;
