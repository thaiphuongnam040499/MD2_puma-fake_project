import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { act_search_newArrivals } from '../redux/actions';

export default function Navbar() {
  const [search,setSearch] = useState()
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let users = useLocation().state
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("users"));
    if (user) {
      setName(user.userName);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [users]);
  return (
    <div>
      {/* header */}
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="navbar_items">
          <div className="navbar_logo">
            <NavLink to={'/'}> <img src="./image/puma.webp" alt="" /></NavLink>
          </div>
          <div className="navbar_list ">
            <ul className="nav_list_item nav">
              <li className="nav_item d-flex">
                <NavLink className='navlink' to={'/newArrivals'}>New Arrivals</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>Launch Calendar</li>
                    <li className='list-group-item'>Women's New Arrivals</li>
                    <li className='list-group-item'>Men's New Arrivals</li>
                    <li className='list-group-item'>Kids's New Arrivals</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Shop All New Arrivals</li>
                    <li className='list-group-item'>PUMA X CORDAE</li>
                    <li className='list-group-item'>PUMA X LAQUAN SMITH</li>
                    <li className='list-group-item'>FOREVER CLASSIC</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>PUMA X RICK</li>
                    <li className='list-group-item'>MB Colection</li>
                    <li className='list-group-item'>PUMA X BALMAIN</li>
                    <li className='list-group-item'>TMC Status Symbol</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Block Party</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'women'}>Women</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>Shoes</li>
                    <li className='list-group-item'>Suede</li>
                    <li className='list-group-item'>Cali</li>
                    <li className='list-group-item'>RS Collection</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Clothing</li>
                    <li className='list-group-item'>Hoodies</li>
                    <li className='list-group-item'>T-Shirts</li>
                    <li className='list-group-item'>Leggings</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Accessories</li>
                    <li className='list-group-item'>Hart</li>
                    <li className='list-group-item'>Socks</li>
                    <li className='list-group-item'>Watches</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Soccer Balls</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'men'}>Men</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>Shoes</li>
                    <li className='list-group-item'>Suede</li>
                    <li className='list-group-item'>Cali</li>
                    <li className='list-group-item'>RS Collection</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Clothing</li>
                    <li className='list-group-item'>Hoodies</li>
                    <li className='list-group-item'>T-Shirts</li>
                    <li className='list-group-item'>Leggings</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Accessories</li>
                    <li className='list-group-item'>Hart</li>
                    <li className='list-group-item'>Socks</li>
                    <li className='list-group-item'>Watches</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Soccer Balls</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'kids'}> Kids</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>Shoes</li>
                    <li className='list-group-item'>Suede</li>
                    <li className='list-group-item'>Cali</li>
                    <li className='list-group-item'>RS Collection</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Clothing</li>
                    <li className='list-group-item'>Hoodies</li>
                    <li className='list-group-item'>T-Shirts</li>
                    <li className='list-group-item'>Leggings</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Accessories</li>
                    <li className='list-group-item'>Hart</li>
                    <li className='list-group-item'>Socks</li>
                    <li className='list-group-item'>Watches</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Soccer Balls</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'shop'}> Shop</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>Shoes</li>
                    <li className='list-group-item'>Suede</li>
                    <li className='list-group-item'>Cali</li>
                    <li className='list-group-item'>RS Collection</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Clothing</li>
                    <li className='list-group-item'>Hoodies</li>
                    <li className='list-group-item'>T-Shirts</li>
                    <li className='list-group-item'>Leggings</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Accessories</li>
                    <li className='list-group-item'>Hart</li>
                    <li className='list-group-item'>Socks</li>
                    <li className='list-group-item'>Watches</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>Soccer Balls</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar_actions">
          <i onClick={()=>dispatch(act_search_newArrivals(search))} className="nav_search navbar_action-item bi bi-search" />
          <input
          onChange={(e)=>setSearch(e.target.value)}
            className="navbar_search"
            type="text"

            placeholder="SEARCH PUMA.COM"
          />
          <NavLink to={'admin'}>
            <button className="navbar_actions_btn">
              <i className="navbar_action-item bi bi-heart" />
            </button>
          </NavLink>

          <button className="navbar_actions_btn">
            <NavLink to={'shoppingCart'}><i className="navbar_action-item bi bi-bag text-light" /></NavLink>
          </button>
          <div className="person">
            <button className="navbar_actions_btn navbar-icon">
              <i className="navbar_action-item bi bi-person" />
            </button>
            {
              isLogin ? <ul className="person-item list-group">
                <li className='list-group-item'>{name}</li>
                <li className='list-group-item'>Check order of return</li>
                <li className='list-group-item'>Support</li>
                <li className='list-group-item'>Wishlist</li>
                <li className='list-group-item'>Language</li>
                <li className='list-group-item'><button onClick={() => {
                  localStorage.removeItem("users");
                  setIsLogin(false);
                  navigate("/")
                }} className='btn btn-light'>LogOut</button></li></ul>
                : <ul className="person-item list-group">
                  <li className='list-group-item'>My acount</li>
                  <li className='list-group-item'>Check order of return</li>
                  <li className='list-group-item'>Support</li>
                  <li className='list-group-item'>Wishlist</li>
                  <li className='list-group-item'>Language</li>
                  <li className='list-group-item'>
                    <NavLink to={'login'}><button className="btn btn-warning w-100">Login</button></NavLink>
                  </li>
                  <li className='list-group-item'>
                    <NavLink to={'register'}><button className="btn btn-info w-100">Register here</button></NavLink>
                  </li>
                </ul>
            }

          </div>
          {/* <div > */}
          {/* </div> */}
        </div>
      </nav>
      {/* header */}
    </div>
  )
}
