import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './container/Hero';
import { Cart } from './pages/Cart';
import { Error } from './pages/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
