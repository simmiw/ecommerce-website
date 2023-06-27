import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="webpage">
        <Link to="/">
          <div className="home-page">Home</div>
        </Link>
        <Link to="/aboutus">
          <div className="aboutUs-page">About Us</div>
        </Link>
        <Link to="/productspage">
          <div className="produts-page">Products</div>
        </Link>
      </div>
      <div className="items-on-homepage">
        <img
          className="homepage-img"
          src={
            " https://img.freepik.com/free-vector/modern-devices-isometric-icons-collection-with-sixteen-isolated-images-computers-periphereals-various-consumer-electronics-illustration_1284-29118.jpg?w=740&t=st=1686140126~exp=1686140726~hmac=b5b4ad3cb9a71bebd46fd0483ce1f20f43fc6e1a1b6d6c179ec57d6db0561e94"
          }
          alt="homepage"
          width="100%"
          height="600px"
        />

        <h2>Electronic Devices</h2>
        <p>
          Explore the world of innovative technology and discover a vast range
          of high-quality electronics devices that will revolutionize your daily
          life. At TechTronics, we are passionate about bringing you the latest
          advancements in the electronic industry, ensuring that you stay ahead
          of the curve. Immerse yourself in a seamless browsing experience as
          you navigate through our user-friendly website. From smartphones and
          tablets to smart home appliances and wearable gadgets, we have it all.
          Our extensive product catalog is carefully curated to cater to every
          need and interest, ensuring that you find the perfect device to meet
          your requirements.
        </p>
      </div>
    </>
  );
};
export default HomePage;
