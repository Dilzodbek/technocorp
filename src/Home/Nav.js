import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar navbar-expand-lg" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container container">
                    <NavLink exact to="/" className="nav-logo">
                        Technocorp
                        <i className="fa fa-code"> </i>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/services"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Services
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/portfolio"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}>
                        </i>
                    </div>
                </div>
            </nav>
        </ div>
    );
} export default Nav;

