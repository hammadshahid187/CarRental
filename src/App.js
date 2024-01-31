import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { HeroHeader } from './Components/HeroHeader';
import { Brands } from './Components/Brands';
import { Style } from './Components/Style';
import { CarRent } from './Components/CarRent';
import { Features } from './Components/Features';
import { CarDetailsImg } from './Components/CarDetailsImg';
import { Subscribe } from './Components/Subscribe';
import { Contactus } from './Components/Contactus';
import { Footer } from './Components/Footer';


function App() {
  return (
    <>
    <HeroHeader/>
    <Brands/>
    <Style/>
    <CarRent/>
    <Features/>
    <CarDetailsImg/>
    <Subscribe/>
    <Contactus/>
    <Footer/>
    </>
  );
}

export default App;
