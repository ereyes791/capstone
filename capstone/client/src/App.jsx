import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './views/Home';
import LoginView from './views/Login';
import ProductDetail from './views/ProductDetails';
import './App.css';
import RegisterForm from './views/Register';
import React, { useState } from 'react';
function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm setToken={setToken} />} />
          <Route path="/login" element={<LoginView setToken ={setToken}/>} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
