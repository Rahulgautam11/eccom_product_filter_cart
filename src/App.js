import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Cart from './component/Cartpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/cart' Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
