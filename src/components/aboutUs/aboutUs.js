import React from "react";
import "./aboutUs.css";
import ReactPlayer from 'react-player'

function AboutUs() {
  return (
    <div>
      <div className="about-title">
        <strong>
          <h2> ABOUT US</h2>
        </strong>
      </div>
      <div className="container">
        <div className="aboutus">
          <span>
            Over the course of eight decades, a lot has changed about us. We
            have relocated, undergone expansion, developed new product lines &
            added segments, opened retail chains & stores across India and
            embraced new markets overseas. One thing hasn’t changed - we’re
            still a tight-knit family business, committed to serving the most
            authentic taste of India through our products. Our origins can be
            traced back to a small namkeen shop in Bikaner founded by Ganga
            Bishan Agarwal (Haldiram Ji). This modest shop quickly gained
            popularity and scaled up to meet a booming demand for its
            unique-tasting bhujia. Building on this legacy, his grandson, our
            pioneer Mr. Shiv Kishan Agrawal steered the business towards the
            heights it has tasted today.
          </span>
        </div>
        <div className="about-video">
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
