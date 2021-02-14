import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductsPageListScreen from './screens/ProductsPageListScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ServicesScreen from './screens/ServicesScreen'
import ContactScreen from './screens/ContactScreen'
import DashboardScreen from './screens/DashboardScreen'
import { useSelector } from 'react-redux'


const App = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  return (
    <Router> <Header />
      {/* {!userInfo && userInfo  ? (
        <Header />
      ) : userInfo.isAdmin (
        <>
       
       </>
      )}  */}
         <main>
            <Container>
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/admin/productlist' component={ProductListScreen} exact />
            <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
            <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
            <Route path='/admin/orderlist' component={OrderListScreen} />
            <Route path='/admin' component={DashboardScreen} exact/>


              <Route path='/order/:id' component={OrderScreen} />
              <Route path='/shipping' component={ShippingScreen} />
              <Route path='/payment' component={PaymentScreen} />
              <Route path='/placeorder' component={PlaceOrderScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/productslist' component={ProductsPageListScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen} />
              <Route path='/services' component={ServicesScreen} />
              <Route path='/contact' component={ContactScreen} />
              
              <Route path='/search/:keyword' component={ProductsPageListScreen} exact />
              <Route path='/productslist/page/:pageNumber' component={ProductsPageListScreen} exact />
            
              
            </Container>
            <Route
                path='/search/:keyword/page/:pageNumber'
                component={HomeScreen}
                exact
              />
            <Route path='/' component={HomeScreen} exact />
        
          </main>
          {/* {!userInfo.isAdmin  ? (
             <Footer />
           ) : (
                <></>
            )}  */}
      <Footer />
    </Router>
  )
}

export default App
