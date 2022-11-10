import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="brand">MY PERSONAL WEB</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link to="/about" className="nav-item">
          ABOUT
        </Link>
        <Link to="/portfolio" className="nav-item">
          PORTFOLIO
        </Link>
        <Link to="/blog" className="nav-item">
          BLOG
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
