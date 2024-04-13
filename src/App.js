import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHomePage/MainHeader';
import HomePage from './components/MainHomePage/HomePage';
import SignIn from "./components/MainHomePage/SignIn";
import TvShow from "./components/MainHomePage/TvShow";
import FAQPage from "./components/MainHomePage/FAQPage";
import Footer from "./components/MainHomePage/Footer";
import NavBar from "./Pages/NavBar";
import Banner from "./Pages/Banner";
import List from "./Pages/List";
import MainFooter from "./Pages/MainFooter";



function App() {

  return (
    <>
      <div className="overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <div>
                <MainHeader />
                <HomePage />
                <TvShow />
                <FAQPage />
                <Footer />
              </div>}
            />
            <Route path='/signin' element={
              <div>
                <MainHeader />
                <SignIn />
              </div>}
            />
            <Route path='/register' element={
              <div>
                <MainHeader />
                <SignIn />
              </div>}
            />
            <Route path='/dashboard' element={
              <div>
                <NavBar />
                <Banner />
                <List />
                <MainFooter/>
              </div>}
            />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  );
}

export default App;

