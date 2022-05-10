import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';

function BottomNavbar() {

    return (
        <>
            <nav className='bottom-navbar'>
                <div className='bottom-navbar-container'>
                    <ul className='bottom-nav-menu active'>
                        {/* {click ? 'bottom-nav-menu active' : 'bottom-nav-menu'} */}
                        <li className='bottom-nav-item'>
                            <NavLink to='/' className='bottom-nav-links' >
                                <i className="fa-solid fa-house" />
                            </NavLink>
                        </li>
                        <li className='bottom-nav-item'>
                            <NavLink to='/community' className='bottom-nav-links' >
                                <i className="fa-solid fa-people-group" />
                            </NavLink>
                        </li>
                        <li className='bottom-nav-item'>
                            <NavLink to='/wtg' className='bottom-nav-links' >
                                <i className="fa-solid fa-wifi" />&nbsp;<i className="fa-solid fa-bicycle" />&nbsp;<i className="fa-solid fa-building" />
                            </NavLink>
                        </li>
                        {/* 추가 */}
                        <li className='bottom-nav-item'>
                            <NavLink to='/store' className='bottom-nav-links' >
                                <i className="fa-solid fa-store" />
                            </NavLink>
                        </li>
                        <li className='bottom-nav-item'>
                            <NavLink to='/profile' className='bottom-nav-links' >
                                <i className="fa-solid fa-user" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default BottomNavbar;