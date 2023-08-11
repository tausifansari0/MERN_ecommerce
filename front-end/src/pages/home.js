import Nav from '../components/navbar';
import ProductList from '../components/product-list';
import { useSelector } from 'react-redux';
import Carousel from '../components/carousel';

const Home=()=> {
  const products= useSelector(state=>state.product.products)
  return (
    <>
        <Nav cartCount={3}></Nav>
        <Carousel></Carousel>
      <ProductList products={products}></ProductList>
    </>
  );
}
export default Home;