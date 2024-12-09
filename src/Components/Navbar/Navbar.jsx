import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'
import { IoIosMenu } from 'react-icons/io'
const Navbar = () => {

  const [menu,setMenu] = useState("shop")

  const {getTotalCartItems} = useContext(ShopContext)

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open');
  }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>GoodyGoods</p>
        </div>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop {menu === "shop"? <hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Mens {menu === "mens"? <hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Womens {menu === "womens"? <hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids {menu === "kids"? <hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("electronics")}}><Link to='/electronics' style={{textDecoration:'none'}}>Electronics {menu === "electronics"? <hr/>:<></>}</Link></li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>} 
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">
              {getTotalCartItems()}
            </div>
        </div>
        <IoIosMenu className='nav-dropdown' onClick={dropdown_toggle}/>
    </div>
  )
}

export default Navbar