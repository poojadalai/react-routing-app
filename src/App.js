// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Link } from "react-router-dom";
import DiscoverPage from "./pages/DiscoverPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Link style={{ textDecoration: "none" }} to="/">
      <h1>◓ Pokemon Discovery ◓</h1>
      <Navbar />
      <br></br>
      </Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
