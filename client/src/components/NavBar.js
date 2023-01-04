import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { currentUserStateAtom } from '../recoil/atoms';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [currentUser, setCurrentUser] = useRecoilState(currentUserStateAtom);
    const navigate = useNavigate();


    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(setCurrentUser(null))
        .then(navigate("/"))
    }

    return (
        <nav className="nav">
            <div className="site-title">It's a Date!</div>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                {!currentUser ? <CustomLink to="/login">Login</CustomLink>
                    :
                    <>
                        <CustomLink to="/activities">Activities</CustomLink>
                        <CustomLink to="/calendar">Calendar</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/dates">Dates</CustomLink>
                        <CustomLink to="/relationships">Relationships</CustomLink>
                        <CustomLink>
                            <button onClick={handleLogout}>Logout</button>
                        </CustomLink>
                    </>
                }


            </ul>
        </nav>
    )
};

export default Navbar;