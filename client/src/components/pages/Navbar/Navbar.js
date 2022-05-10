import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../commons/Button/Button';
import './Navbar.css';

import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const logoutHandler = () => {
    axios.get('/api/users/logout').then(response => {
      if (response.status === 200) {
        window.localStorage.removeItem('userId');
        navigate("/sign-in");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ALLTELIER <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* 추가 */}
            <li className='nav-item'>
              <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                Community
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/store' className='nav-links' onClick={closeMobileMenu}>
                Store
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/wtg' className='nav-links' onClick={closeMobileMenu}>
                Wtg
              </Link>
            </li>
            {/* 추가 */}
            {(user.userData && !user.userData.isAuth)
              ? <>
                <li className='nav-item'>
                  <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign In
                  </Link>
                </li></>
              : <>
                <Link to='' className='nav-links-mobile' onClick={() => { closeMobileMenu(); logoutHandler(); }}>Logout</Link>
              </>}
          </ul>
          {(user.userData && !user.userData.isAuth)
            ? <>
              {button && <Button buttonStyle='btn--outline' path='sign-up'>SIGN UP</Button>}
              {button && <Button buttonStyle='btn--outline' path='sign-in'>SIGN IN</Button>}</>
            : <>
              {button && <Button buttonStyle='btn--outline' onClick={logoutHandler}>LOG OUT</Button>}</>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;