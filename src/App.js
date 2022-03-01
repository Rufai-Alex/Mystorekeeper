import "./App.css";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Heros from "./components/Heros";
import MidSection from "./components/MidSection";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";
import Features from "./pages/Features";
import ForgetPassword from "./pages/ForgetPassword";
import LogIn from "./pages/logIn";
import Otp from "./pages/Otp";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="h-full font-Montserrat">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/changePass" element={<ChangePassword />} />
        <Route path="otp" element={<Otp />} />
      </Routes>
    </div>
  );
}

export default App;
//
