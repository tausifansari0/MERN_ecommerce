import './App.css';
import Home from './pages/home'; 
import { Outlet } from 'react-router-dom';
function App() {
  return (
      <Outlet></Outlet>
  );
}

export default App;
