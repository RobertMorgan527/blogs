import { Link } from "react-router-dom"
import "./navbar.css"

function MainNavigation() {
    return (
        <div>
            <nav class="navbar">
                <h1>Blog Board</h1>
                <ul class="nav-links">
                    <li class="nav-link">
                        <Link to='/'>All blogs</Link>
                    </li>
                    <li class="nav-link"> 
                        <Link to='/new-blog'>New blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default MainNavigation;
