import {useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="navbar">

            <ul className="navbar-list">

                <li className="navbar-item">
                    <button className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => navigate("/")}>About</button>
                </li>

                <li className="navbar-item">
                    <button className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`} onClick={() => navigate("/resume")}>Resume</button>
                </li>

                {/* <li className="navbar-item">
                    <button className={`navbar-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={() => navigate("/portfolio")}>Portfolio</button>
                </li>

                <li className="navbar-item">
                    <button className={`navbar-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={() => navigate("/blog")}>Blog</button>
                </li> */}

                <li className="navbar-item">
                    <button className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => navigate("/contact")}>Contact</button>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;
