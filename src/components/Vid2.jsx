import React from "react";

import Paris from "../assets/Paris.mp4";
import Button from "./Button";

const Vid2 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={Paris} autoPlay loop muted />

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
        <h1>Let's go Paris!!</h1>
        <h6>43K views</h6>
        <h4 className="places">
          Paris is one of the most beautiful cities in the world. The city is
          also known for its high-quality gastronomy and the terraces of its
          cafés.
        </h4>
      </div>
    </div>
  );
};

export default Vid2;
