import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
    const dispatch = useDispatch()


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const logoutHandler = () => {
       dispatch(logout())
    }

    
   
     
    return <header>   
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>SRS-Shop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="m-auto">
              <LinkContainer to="/" style={ navLinkStyle }>
                        <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/productslist" style={ navLinkStyle }>
                        <Nav.Link>Products</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about-us" style={ navLinkStyle }>
                        <Nav.Link>About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact" style={ navLinkStyle }>
                        <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
              </Nav>
              <Route render={({ history }) => <SearchBox history={history} />} />
                <Nav className="ml-auto">
                
                  <LinkContainer to="/cart">
                      <Nav.Link>
                        <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                  </LinkContainer>

                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                  <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
                            </LinkContainer>
                        )}
                        {userInfo && userInfo.isAdmin && (
                          <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to='/admin/userlist'>
                                  <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                                  <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/orderlist'>
                                  <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        )}
                  
                </Nav>
             </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
}

const navLinkStyle = {
  color: "white",
  fontSize: '16px',
  fontWeight: 500,
}

export default Header
