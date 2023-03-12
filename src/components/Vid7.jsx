import React from "react";
import NewYork from "../assets/NewYork.mp4";
import Button from "./Button";

const Vid5 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={NewYork} autoPlay loop muted />

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
        <h1>Come To NewYork!!</h1>
        <h6>2M views</h6>
        <h4 className="places">
          New York is a city of diversity and dynamism. It is also a city of
          politics, economy and culture. It is even described as the economic
          and cultural capital of the world.
        </h4>
      </div>
    </div>
  );
};

export default Vid5;
