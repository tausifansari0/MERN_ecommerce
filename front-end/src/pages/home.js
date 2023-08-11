import Nav from '../components/navbar';
import ProductList from '../components/product-list';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import { ADD_TO_CART } from '../actions';
const Home=()=> {
const products= useSelector(state=>state.product.products)
const dispatch=useDispatch();
const cartItems= useSelector(state=>state.cart.items)
const addToCart=(product)=>{
    dispatch({type:ADD_TO_CART,payload:product})
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