import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import RegistrationPage from './pages/RegistrationPage';
import CheckoutPage from './pages/CheckoutPage';
import Homepage from './pages/Homepage';
import PageLayout from './pages/PageLayout';
import ConfirmationPage from './pages/ConfirmationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
