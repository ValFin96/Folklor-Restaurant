import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">
          We believe that dining is not just about food, but also about the overall experience. 
          That's why we've created a warm and inviting atmosphere that is perfect for everything from a romantic dinner for two to a lively gathering with friends and family. 
          Our friendly and knowledgeable staff is always on hand to answer any questions you may have and to help you choose the perfect dish to suit your taste.
        </p>
        <button type="button" className="custom__button_desktop">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="history_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our restaurant is proud to be the sister restaurant of Warike Peruvian Restaurant in Surry Hills, a beloved dining destination that has been serving up modern Peruvian cuisine. 
          Building on the success of Warike, our restaurant was created with the vision of showcasing the fusion of Peruvian and Asian culinary traditions through the lens of Chifa and Nikkei cuisine.
        </p>
        <button type="button" className="custom__button_desktop">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
