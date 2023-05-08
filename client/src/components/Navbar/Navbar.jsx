import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Nav, Container, Modal, Tab, Alert } from 'react-bootstrap';
import SignUpForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    window.open("https://www.opentable.com.au/r/folklor-restaurant-and-bar-reservations-dawes-point?restref=196004&lang=en-AU&ot_source=Restaurant%20website")
  }
  return (
    <>
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.folklor} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">HOME</a>
        </li>
        <li className="p__opensans">
          <a href="#about">ABOUT</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      {Auth.loggedIn() ? (
          <>
      <div className="app__navbar-book">
              <a onClick={handleClick} className="p__opensans">BOOK TABLE</a>
      </div>
     <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
          </>
      ) : (
        // <div className="app__navbar-book">
        //     <a href='/' onClick={() => setShowModal(true)}  className="p__opensans">Login / Sign Up</a>
        //   </div>
            <Nav.Link className="app__navbar-book" onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      )}
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu  fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                  <a href="#home" onClick={() => setToggleMenu(false)} >Home</a>
              </li>
              <li className="p__opensans">
                  <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>
              <li className="p__opensans">
                  <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </li>
            </ul>
          </div> 
          )}

        </div>
  </nav>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login' className='login-btn'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup' className='signup-btn'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
  </>
  )
}

export default Navbar;
