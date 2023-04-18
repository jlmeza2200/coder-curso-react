import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, ItemDetail, Navbar } from './components';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/itemDetail/:productId' element={<ItemDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
