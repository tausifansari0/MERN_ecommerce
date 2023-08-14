import Nav from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/footer';
import {} from '../actions';
import Checkout from '../components/checkout';

const CheckoutPage=()=> {
const dispatch=useDispatch();
const cartItems = useSelector(state=>state.cart.items)
const order = useSelector(state=>state.order)


return (
    <>
        <Nav cartCount={cartItems.length}></Nav>
        <Checkout order={order}></Checkout>
        <Footer></Footer>
    </>
  );
}
export default CheckoutPage;