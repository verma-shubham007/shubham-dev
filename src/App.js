import './App.css';
import Sidebar from "./Components/Shared/sidebar";
import Navbar from "./Components/Shared/Navbar/navbar";
import About from "./Components/Pages/About/about";
import {Route, Routes} from "react-router-dom";
import Resume from "./Components/Pages/Resume/resume";
import Portfolio from "./Components/Pages/Portfolio/portfolio";
import Blog from "./Components/Pages/Blog/blog";
import Contact from "./Components/Pages/Contact/contact";

function App() {
  return (
    <main>
      <Sidebar />
        <div className="main-content">
            <Navbar />
            <Routes>
                <Route index element={<About />} />
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </main>
  );
}

export default App;
