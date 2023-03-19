import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Chefs from './components/chefs/Chefs';
import Restaurants from './components/reastaurants/Restaurants';
import RestaurantPage from './components/reastaurants/components/restaurantsPage/RestaurantPage';
import SignInPage from './components/signIn/SignInPage';
import SignUpPage from "./components/signUp/SignUpPage";
import { useDispatch } from 'react-redux';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chefs' element={<Chefs />} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/restaurants/:id' element={<RestaurantPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
