import React from 'react';
import web from "../src/images/img1.jpg";
import Common from "./Common";

const Home = () => {
    return(
        <>
          <Common name ="welcome to HOme page" imgsrc={web} visit="/about" btname="Get home Started" />
        </>
    )
}

export default Home;