import { NavLink } from "react-router"

export const Navigation = () => {
    return (
        <nav>
            <ul className="flex items-center nav-list">
                <li><NavLink to="/">Alle</NavLink></li>
                <li><NavLink to="/indland">Indland</NavLink></li>
                <li><NavLink to="/udland">Udland</NavLink></li>
                <li><NavLink to="/teknologi">Teknologi</NavLink></li>
                <li><NavLink to="/sport">Sport</NavLink></li>
                <li><NavLink to="/politik">Politik</NavLink></li>
                <li><NavLink to="/samfund">Samfund</NavLink></li>
            </ul>
        </nav>
    );
}