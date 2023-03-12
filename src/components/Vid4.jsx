import React from "react";
import Spain from "../assets/Spain.mp4";
import Button from "./Button";


const Vid4 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={Spain} autoPlay loop muted />
        {/* <VideoPlayer source={Spain} /> */}
        <div>
          <Button
            onClick={() => alert("Button clicked!")}
            className="buttontext"
          >
            Tap to play
          </Button>
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
