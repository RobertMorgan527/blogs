import { Link } from "react-router-dom"
import "./navbar.css"

function MainNavigation() {
    return (
        <div>
            <nav className="navbar">
                <h1>Blog Board</h1>
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li className="nav-link"> 
                        <Link to='/new-blog'>New blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default MainNavigation;
