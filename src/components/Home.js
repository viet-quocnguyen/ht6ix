import React, { useContext, useEffect, useState } from "react";
import Banner from "../assets/homeBanner.png";
import Playground from "../assets/emptyPlayground.png";
import "../components/LessonStart.scss";

function Home() {

    return (
        <div className="startContainer">
            <div className="bannerContainer">
                <img className="lessonBanner" src={Banner} alt=""></img>
                <div className="bannerTitle">Home</div>
            </div>
            <div>
                <img className="playground" src={Playground} alt=""></img>
            </div>

        </div >
    );
}

export default Home;
