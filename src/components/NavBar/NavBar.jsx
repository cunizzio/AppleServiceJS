
import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
    return (
        <div>
            <h1>
                <NavLink to="/">Apple Service V.B.</NavLink>
            </h1>
            <nav>
                <div>
                    <div>
                        <ul className="NavBar">
                            <li>
                                <NavLink to="/category/iPhone">iPhone</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/MacBook">MacBook</NavLink>
                            </li>
                            <li>
                                <NavLink to="/category/AppleWatch">Apple Watch</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget/>
            <Outlet/>            
        </div>
    );
};

