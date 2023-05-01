import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
        Welcome to Folklor, where Chifa and Nikkei cuisine reign supreme, and every dish is a celebration of culinary creativity. 
        Every bite is a journey through exotic flavors and textures that will tantalize your senses. With a vibrant atmosphere and a menu that blends tradition with innovation, Folklor is the perfect destination for anyone who loves to explore new and exciting flavors.
      </p>
      <button type="button" className="custom__button_desktop">Explore Menu</button>
      <button type="button" className="custom__button_mobile">Book Table</button>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" className="header__img"/>
    </div>
  </div>
);

export default Header;
