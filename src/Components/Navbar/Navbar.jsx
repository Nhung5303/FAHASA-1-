import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/1.1.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

  const [menu,setMenu]=useState("home");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>FAHASA</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("trongnuoc")}}><Link style={{ textDecoration: 'none'}} to='/trongnuoc'>Sách Trong Nước </Link>{menu==="trongnuoc"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("nuocngoai")}}><Link style={{ textDecoration: 'none'}} to='/nuocngoai'>Sách Nước Ngoài</Link>{menu==="nuocngoai"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("thieunhi")}}><Link style={{ textDecoration: 'none'}} to='/thieunhi'>Truyện Thiếu Nhi</Link>{menu==="thieunhi"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='./login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar