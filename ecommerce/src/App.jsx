import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Success from './pages/Success';
import Order from './pages/Order';
import Checkout from './pages/Checkout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='/order' element={<Order />} />
          <Route path='/checkout' element= {<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
