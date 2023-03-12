import React from "react";
import NewYork from "../assets/NewYork.mp4";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Vid5 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={NewYork} autoPlay loop muted />

        <div>
        <Link to="/Sec7" link={NewYork}>
        <Button>
            Tap to play
          </Button>
        </Link>
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
