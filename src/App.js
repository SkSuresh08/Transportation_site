import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Services from "./Services/Services";
import TransportationCarousel from "./Carousel/TransportationCarousel";
import Git from "./Get-In-Touch/GetInTouch";
import Footer from "./Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";
import Image from "./Image/Image";
import UserLogin from "./UserLogin/UserLogin";
import RegistrationForm from "./register/Register";
import AddFreightDetails from "./FrieghtDetails/Frieght";
import TrackingPage from "./TrackingPage/TrackingPage";
import MissingElement from "./MissingElement";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Image />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<TransportationCarousel />} />
        <Route path="/GetInTouch" element={<Git />} />
        <Route path="/dashboard/login" element={<UserLogin />} />
        <Route path="/dashboard/register" element={<RegistrationForm />} />
        <Route
          path="/dashboard/frieghtdetails"
          element={<AddFreightDetails />}
        />
        <Route path="/dashboard/TrackingPage" element={<TrackingPage />} />
        <Route path="*" element={<MissingElement/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
