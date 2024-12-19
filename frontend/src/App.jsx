import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Login from "./components/Login.jsx";



function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';
 
  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

