import './App.css';
import ProductList from './components/product-list';
import db from './components/database';
function App() {
  return (
    <div className="App">
      <ProductList products={db.products}></ProductList>
    </div>
  );
}

export default App;
