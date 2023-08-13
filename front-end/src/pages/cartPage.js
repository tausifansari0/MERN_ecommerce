import Nav from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/footer';
import { CHANGE_ORDER_CART,CHANGED_QUANTITY } from '../actions';
import Cart from './cart';
import { useEffect } from 'react';

const Home=()=> {
const dispatch=useDispatch();
const cartItems = useSelector(state=>state.cart.items)
const order = useSelector(state=>state.order)
useEffect(()=>{
    dispatch({type:CHANGE_ORDER_CART,payload:cartItems})
},[cartItems])

const changeQuantity=(quantity,item)=>{
    dispatch({type:CHANGED_QUANTITY,payload:{...item,quantity:quantity}})
}

return (
    <>
        <Nav cartCount={cartItems.length}></Nav>
        <Cart items={cartItems} order={order} changeQuantity={changeQuantity}></Cart>
        <Footer></Footer>
    </>
  );
}
export default Home;