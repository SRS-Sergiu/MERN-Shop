import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from "./elements/ButtonResponsive";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import "./cssComponents/Header.css";

const Header = () => {
    const dispatch = useDispatch()


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const logoutHandler = () => {
       dispatch(logout())
    }

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              SRS
              <i className='fab fa-typo3' />
            </Link>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/productslist'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
  
              <li>
                <Link
                  to='/login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <LinkContainer to="/cart">
                      <Link>
                        <i className="fas fa-shopping-cart"></i>Cart</Link>
                  </LinkContainer>

            {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
              )}
          </div>
        </nav>
      </>
    );
  }
//  
// {userInfo ? (
//   <NavDropdown title={userInfo.name} id='username'>
//       <LinkContainer to='/profile'>
//         <NavDropdown.Item>Profile</NavDropdown.Item>
//       </LinkContainer>
//       <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
//   </NavDropdown>
// ) : (
//   <LinkContainer to="/login">
//       <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
//   </LinkContainer>
// )}
// {userInfo && userInfo.isAdmin && (
// <NavDropdown title='Admin' id='adminmenu'>
//       <LinkContainer to='/admin/userlist'>
//         <NavDropdown.Item>Users</NavDropdown.Item>
//       </LinkContainer>
//       <LinkContainer to='/admin/productlist'>
//         <NavDropdown.Item>Products</NavDropdown.Item>
//       </LinkContainer>
//       <LinkContainer to='/admin/orderlist'>
//         <NavDropdown.Item>Orders</NavDropdown.Item>
//       </LinkContainer>
//   </NavDropdown>
// )}


const navLinkStyle = {
  color: "white",
  fontSize: '16px',
  fontWeight: 500,
}

export default Header
