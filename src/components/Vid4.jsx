import React from "react";
import Spain from "../assets/Spain.mp4";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Vid4 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={Spain} autoPlay loop muted />
        {/* <VideoPlayer source={Spain} /> */}
        <div>
        <Link to="/Sec4" link={Spain}>
        <Button>
            Tap to play
          </Button>
        </Link>
        </div>
      </div>
      <div className="VideoRight">
        <h1>Spain in 1 Minute-Travel Video</h1>
        <h6>1M views</h6>
        <h4 className="places">
          Spain is a land of beautiful beaches, medieval architecture, Moorish
          palaces, glamorous gardens, contemporary architectural marvels,
          breathtaking mountain ranges, a rich culture, a welcoming populace,
          and delicious cuisines.
        </h4>
      </div>
    </div>
  );
};

export default Vid4;
