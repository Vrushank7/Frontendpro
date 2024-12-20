import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Login from "./components/Login.jsx";
import Signup from './components/Signup.jsx';



function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';
  const thatnavbar = location.pathname !== '/sign';
 
  return (
    <div>
      {showNavbar && thatnavbar  && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
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

