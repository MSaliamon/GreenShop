import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter basename="/GreenShop/">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

