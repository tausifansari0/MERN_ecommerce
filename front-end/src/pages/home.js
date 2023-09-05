import Nav from '../components/navbar';
import ProductList from '../components/product-list';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import { CHANGED_ITEM_IN_CART, addToCartAC, initializeCartAC, initializeProductAC, initializeUserAC } from '../actions';
import { useEffect } from 'react';
const Home=()=> {
const products= useSelector(state=>state.product.products)
const dispatch=useDispatch();
const cartItems= useSelector(state=>state.cart.items)

useEffect(()=>{
  dispatch(initializeUserAC());
  dispatch(initializeProductAC());
  
},[])
const addToCart=(product)=>{
    dispatch(addToCartAC(product))
  }
 

  return (
    <>
        <Nav cartCount={cartItems.length}></Nav>
        <Carousel></Carousel>
        <ProductList products={products} addToCart={addToCart}></ProductList>
        <Footer></Footer>
    </>
  );
}
export default Home;