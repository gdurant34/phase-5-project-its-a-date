import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }

    return (
        <nav className="nav">
            <div className="site-title">It's a Date!</div>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/activities">Activities</CustomLink>
                <CustomLink to="/calendar">Calendar</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/dates">Dates</CustomLink>
                <CustomLink to="/relationships">Relationships</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </ul>
        </nav>
    )
};

export default Navbar;