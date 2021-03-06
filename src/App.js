import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, featuredProductsFetch, filteredProducts } from './redux/product'
import { currentUser } from './redux/user'
import { defaultCart, cartOrderId, myProductOrders } from './redux/cart'
import { Route, Switch } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './Components'
import { 
  Home,
  Products, 
  SingleProduct, 
  About, 
  Cart, 
  Error, 
  Checkout,
  Auth, 
  PrivateRoute 
} from './Pages'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  
  // auto login
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`${process.env.REACT_APP_RAILS_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((r) => r.json())
      .then((user) => {
        dispatch(currentUser(user))
      })
    }
  }, [dispatch])
      

  // products fetch
  useEffect(() => {
    fetch(`${process.env.REACT_APP_RAILS_URL}/products`)
    .then((r) => r.json())
    .then((productsArray) => {
      dispatch(allProducts(productsArray))
    })
  }, [dispatch])

  // filtered products
  useEffect(() => {
    fetch(`${process.env.REACT_APP_RAILS_URL}/products`)
    .then((r) => r.json())
    .then((filteredArray) => {
      dispatch(filteredProducts(filteredArray))
    })
  }, [dispatch])

  // featured products fetch
  useEffect(() => {
    fetch(`${process.env.REACT_APP_RAILS_URL}/products`)
    .then((r) => r.json())
    .then((featuredProductsArray) => {
      dispatch(featuredProductsFetch(featuredProductsArray))
    })
  }, [dispatch])

  // autoLoads the cart upon login
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        fetch(`${process.env.REACT_APP_RAILS_URL}/orders`)
        .then(r => r.json())
      .then(misterCart => {
        const currentCart = [...misterCart]
        .filter((cart) => cart.user_id === user.id)
        .filter((checked) => checked.checked_out === false)
        const theCart = currentCart[0]
        dispatch(defaultCart(theCart.products))
        dispatch(myProductOrders(theCart.product_orders))
        dispatch(cartOrderId(theCart.id))
      })
      }, 1500)
    }
  }, [dispatch, user])

  return (
    <div>
      <Navbar />
      <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path='/products/:id' 
          children={<SingleProduct />}/
          >
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
