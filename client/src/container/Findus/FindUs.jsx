import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  function handleClick() {
    window.open("https://www.google.com/maps/place/Folklor+Restaurant+%26+Bar/@-33.8567748,151.2033095,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12afed79bffd59:0xd553be5114057465!8m2!3d-33.8567793!4d151.2058844!16s%2Fg%2F11twmr8hn9")
  }

  return (
    <div className="app__bg app__wrapper section__padding" id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
          Find Us
        </h1>
        <div className='app__warapper-content'>
          <p className='p__opensans'>Shop 7&8 16A Hickson Road, Dawes Point NSW 2000</p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
          <button onClick={handleClick} className='custom__button_desktop' style={{ marginTop: '2rem' }}>Visit Us</button>
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt='findus' />
      </div>

    </div>
  )
};

export default FindUs;