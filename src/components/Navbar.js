import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
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
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'women'}>Women</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>abc</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'men'}>Men</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>dddd</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'kids'}> Kids</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>ssss</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'collaborations'}>Collaborations</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>ccccccc</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'sport'}>Sport</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>qqqqqqqqqqq</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
              <li className="nav_item">
                <NavLink className='navlink' to={'sale'}>Sale</NavLink>
                <div className="list_item d-flex justify-content-around">
                  <ul className='list-group'>
                    <li className='list-group-item'>nnnnnnnnn</li>
                    <li className='list-group-item'>WOMEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>MEN'S NEW ARRIVALS</li>
                    <li className='list-group-item'>KIDS' NEW ARRIVALS</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                  <ul className='list-group'>
                    <li className='list-group-item'>LAUNCH CALENDAR</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar_actions">
          <i className="nav_search navbar_action-item bi bi-search" />
          <input
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
            <NavLink to={'shoppingCart'}><i className="navbar_action-item bi bi-bag" /></NavLink>
          </button>
          <div className="person">
            <button className="navbar_actions_btn navbar-icon">
              <i className="navbar_action-item bi bi-person" />
            </button>
            <ul className="person-item list-group">
              <li className='list-group-item'>My acount</li>
              <li className='list-group-item'>Check order of return</li>
              <li className='list-group-item'>Support</li>
              <li className='list-group-item'>Wishlist</li>
              <li className='list-group-item'>Language</li>
              <li className='list-group-item'>
                <NavLink to={'login'}><button className="btn btn-warning mx-3">Login</button></NavLink>
              </li>
              <li className='list-group-item'>
                <NavLink to={'register'}><button className="btn btn-light">Register here</button></NavLink>
              </li>
            </ul>
          </div>
          {/* <div > */}
          {/* </div> */}
        </div>
      </nav>
      {/* header */}
    </div>
  )
}
