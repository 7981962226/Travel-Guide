
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Collections = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } = props.places;

  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="collectionSection" data-aos="fade-up">
      <h2 className="sectionHeading"><span>{title}</span></h2>
      
      <div className="placeImages">
        <div className="placeItem" data-aos="zoom-in">
          <img src={image1} alt="Himalayas" />
          <div className="placeInfo">
            <p>Himalayas</p>
            <button className="bookingButton">Book Now</button>
            <p className="randomText">Discover the majestic heights.</p>
          </div>
        </div>
        <div className="placeItem" data-aos="zoom-in" data-aos-delay="100">
          <img src={image2} alt="Niagara Falls" />
          <div className="placeInfo">
            <p>Niagara Falls</p>
            <button className="bookingButton">Book Now</button>
            <p className="randomText">Experience the awe-inspiring power.</p>
          </div>
        </div>
        <div className="placeItem" data-aos="zoom-in" data-aos-delay="200">
          <img src={image3} alt="Grand Canyon" />
          <div className="placeInfo">
            <p>Grand Canyon</p>
            <button className="bookingButton">Book Now</button>
            <p className="randomText">Marvel at the stunning views.</p>
          </div>
        </div>
        <div className="placeItem" data-aos="zoom-in" data-aos-delay="300">
          <img src={image4} alt="Lakshadweep" />
          <div className="placeInfo">
            <p>Lakshadweep</p>
            <button className="bookingButton">Book Now</button>
            <p className="randomText">Enjoy serene island life.</p>
          </div>
        </div>
        <div className="placeItem" data-aos="zoom-in" data-aos-delay="400">
          <img src={image5} alt="Sydney" />
          <div className="placeInfo">
            <p>Sydney</p>
            <button className="bookingButton">Book Now</button>
            <p className="randomText">Explore the vibrant cityscape.</p>
          </div>
        </div>
        <div className="placeItem" data-aos="zoom-in" data-aos-delay="500">
          <img src={image6} alt="London" />
          <div className="placeInfo">
            <p>London</p>
            <button className="bookingButton">Book Now</button>
            <p className="randomText">Enjoy the view.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
