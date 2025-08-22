import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { useState, useEffect } from 'react';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem('isRegistered') === 'true';
    setIsRegistered(registered);
  }, []);

  const handleRegistration = () => {
    localStorage.setItem('isRegistered', 'true');
    setIsRegistered(true);
  };

  return (
    <BrowserRouter basename="/GreenShop/">
      <Routes>
        <Route
          path="/"
          element={
            !isRegistered ? (
              <SignUp onRegister={handleRegistration} />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />
        <Route path="/home" element={<Layout />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp onRegister={handleRegistration} />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

