import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, featuredProductsFetch, filteredProducts } from './redux/product'
import { currentUser } from './redux/user'
// import { addToCart } from './redux/cart'
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
  const cart = useSelector(state => state.cart.cart)
  console.log(user)
  console.log(cart)

  // auto login
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/api/v1/me', {
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
    fetch('http://localhost:3000/api/v1/products')
    .then((r) => r.json())
    .then((productsArray) => {
      dispatch(allProducts(productsArray))
    })
  }, [dispatch])

  // filtered products
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
    .then((r) => r.json())
    .then((filteredArray) => {
      dispatch(filteredProducts(filteredArray))
    })
  }, [dispatch])

  // featured products fetch
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
    .then((r) => r.json())
    .then((featuredProductsArray) => {
      dispatch(featuredProductsFetch(featuredProductsArray))
    })
  }, [dispatch])

  

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
