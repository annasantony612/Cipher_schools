import React from "react";
import Hongkong from "../assets/Hongkong.mp4";
import Button from "./Button";

const Vid5 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={Hongkong} autoPlay loop muted />

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
        <h1>Hong Kong in 1 Minute</h1>
        <h6>28K views</h6>
        <h4 className="places">
          Hong Kong and its outdoor wonders​​ All you need to do is drive for
          less than half an hour to reach either pristine beaches, lush green
          mountains .
        </h4>
      </div>
    </div>
  );
};

export default Vid5;
