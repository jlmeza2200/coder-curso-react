import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, ItemDetail, Navbar } from './components';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/itemDetail/:productId' element={<ItemDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
