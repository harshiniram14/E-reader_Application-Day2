import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./assets/App.css";
import LogoPage from "./Preloader/logopg";
import Navbar from "./Navbar";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    
    </>
  );
}

export default App;
