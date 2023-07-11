import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "../../styles/header.css";
import { useState } from 'react';
import userData from '../../assets/data/userData';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications'

window.search = "";
const navigationLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/ads',
    display: 'Ads'
  },
  {
    path: '/bookmark',
    display: 'Bookmark'
  },
  {
    path: '/sell',
    display: 'Sell My Car'
  },
]

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  if (location.pathname === "/home" && window.username !== "") {
    if (user == null) {
      userData.forEach((item) => {
        if (item.userName === window.username) {
          setUser(item);
        }
      })
    }
  }

  function logOut() {
    window.username = "";
    window.cart = [];
    setUser(null);
    NotificationManager.success('Successfully logged out !', 'Thank you');
    setTimeout(() => {
      NotificationManager.removeAll();
    }, 3000);
  }
const handelKeyDown = event =>{
  if(event.key === "Enter"){
      setSearch();
  }
}
  function setSearch(){
    setTimeout(() => {
      navigate('/shop');
    }, 200);
  }
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');
  return <header className="header">
    <div className="header__top">
      {/*--- header__top ---*/}
      <Container>
        <Row>
          {user === null &&
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <Link to='/login' className='login'> <i className="ri-login-circle-line"></i> Login </Link>
                <Link to='/register' className='register'> <i className="ri-user-3-line"></i> Register </Link>
              </div>
            </Col>
          }
          {user !== null &&
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <span>Welcome, {user.userName}</span>
                <button className='logout-btn' onClick={logOut}>Log out</button>
              </div>
            </Col>
          }
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__right">
              <span>Call Us:</span>
              <span className="header__top__help">
                <i className="ri-phone-line"></i> +899-999-9900
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    {/*--- header__middle ---*/}
    <div className="header__middle">
      <Container>
        <Row>
          <Col lg='3' md='3' sm='4' className='logoDiv'>
            <div className="logo">
              <h1>
                <Link to='/home' className='linkToHome'>
                  <i className="ri-roadster-line"></i>
                  <span> Volt Wheels </span>
                </Link>
              </h1>
            </div>
          </Col>

          <Col lg="2" md="3" sm="0" className='btnDiv'>
            <button className="btn__cart">
              <Link to='/ads'>
                <span><i class="ri-advertisement-line"></i> Ads </span>
              </Link>
            </button>
          </Col>
          <Col lg="2" md="3" sm="0" className='btnDiv'>
            <button className="btn__cart">
              <Link to='/sell'>
                <span> Sell My Car </span>
              </Link>
            </button>
          </Col>
          <Col lg="2" md="3" sm="0" className='btnDiv'>
            <button className="btn__cart">
              <Link to='/bookmark'>
                <span><i class="ri-bookmark-3-line"></i> Bookmark </span>
              </Link>
            </button>
          </Col>

        </Row>
      </Container>
    </div>

    <div className="header__navigation">
      <Container>
        <div className="navigation__wrapper">
          <span className="mobile__menu">
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="nav__right__search">
            <div className="search__box">
              <input onChange={e => window.search = e.target.value} onKeyDown={handelKeyDown} type="text" placeholder="Search" />
              <button className='search-btn' onClick={setSearch}>
                <span><i className="ri-search-2-line border border-warning border-3 p-1 rounded"></i></span>
              </button>
            </div>

          </div>
        </div>
      </Container>
    </div>
  </header>
}

export default Header
