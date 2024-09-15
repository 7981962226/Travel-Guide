
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Hotels = ({ hotels }) => {
    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <div className="hotelsSection" data-aos="fade-up">
            <h2 className="sectionHeading"><span>Hotels</span></h2>
            <div className="hotelImages">
                <div className="hotelImageWrapper" data-aos="zoom-in">
                    <img src={hotels.image1} alt="Hotel Serenity" />
                    <div className="hotelInfo">
                        <p>Hotel Serenity</p>
                        <p>Experience tranquility at Hotel Serenity, where comfort meets elegance.</p>
                        <button className="bookingButton">Book Now</button>
                    </div>
                </div>
                <div className="hotelImageWrapper" data-aos="zoom-in" data-aos-delay="100">
                    <img src={hotels.image2} alt="The Grand Resort" />
                    <div className="hotelInfo">
                        <p>The Grand Resort</p>
                        <p>Indulge in luxury at The Grand Resort with top-notch amenities and stunning views.</p>
                        <button className="bookingButton">Book Now</button>
                    </div>
                </div>
                <div className="hotelImageWrapper" data-aos="zoom-in" data-aos-delay="200">
                    <img src={hotels.image3} alt="Oceanfront Inn" />
                    <div className="hotelInfo">
                        <p>Oceanfront Inn</p>
                        <p>Relax by the ocean at Oceanfront Inn, your gateway to beachside bliss.</p>
                        <button className="bookingButton">Book Now</button>
                    </div>
                </div>
                <div className="hotelImageWrapper" data-aos="zoom-in" data-aos-delay="300">
                    <img src={hotels.image4} alt="Mountain Lodge" />
                    <div className="hotelInfo">
                        <p>Mountain Lodge</p>
                        <p>Discover the charm of the mountains at Mountain Lodge with cozy accommodations.</p>
                        <button className="bookingButton">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
