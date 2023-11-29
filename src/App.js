
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import LoginLogin from './Pages/LoginLogin';
import Footer from './Components/Footer/Footer';
import banner_trongnuoc from './Components/Assets/banner_trongnuoc.jpg'
import banner_nuocngoai from './Components/Assets/banner_nuocngoai.png'
import banner_thieunhi from './Components/Assets/banner_thieunhi.png'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/trongnuoc' element={<ShopCategory banner={banner_trongnuoc} category="trongnuoc"/>}/>
      <Route path='/nuocngoai' element={<ShopCategory banner={banner_nuocngoai} category="nuocngoai"/>}/>
      <Route path='/thieunhi' element={<ShopCategory banner={banner_thieunhi} category="thieunhi"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/LoginLogin' element={<LoginLogin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
