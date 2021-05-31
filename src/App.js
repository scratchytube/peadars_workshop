import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, featuredProductsFetch, filteredProducts } from './redux/product'
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
  PrivateRoute 
} from './Pages'

const App = () => {
  const dispatch = useDispatch()

  // products fetch
  useEffect(() => {
    fetch('https://course-api.com/react-store-products')
    .then((r) => r.json())
    .then((productsArray) => {
      dispatch(allProducts(productsArray))
    })
  }, [dispatch])

  // filtered products
  useEffect(() => {
    fetch('https://course-api.com/react-store-products')
    .then((r) => r.json())
    .then((filteredArray) => {
      dispatch(filteredProducts(filteredArray))
    })
  }, [dispatch])

  // featured products fetch
  useEffect(() => {
    fetch('https://course-api.com/react-store-products')
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
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
