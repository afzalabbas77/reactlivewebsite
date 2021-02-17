import React from 'react';
import Common from './Common';
import web from "../src/images/img2.jpg";

const About =() => {
  return(
    <>
      <Common name ="welcome to about page" imgsrc={web} visit="/service" btname="Get Started" />
    </>
  )
}

export default About;