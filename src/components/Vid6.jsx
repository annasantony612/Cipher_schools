import React from "react";
import Thailand from "../assets/Thailand.mp4";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Vid5 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={Thailand} autoPlay loop muted />

        <div>
        <Link to="/Sec6" link={Thailand}>
        <Button>
            Tap to play
          </Button>
        </Link>
        </div>
      </div>
      <div className="VideoRight">
        <h1>Thailand | Cinematic Travel Video</h1>
        <h6>67K views</h6>
        <h4 className="places">
          Thailand is a beautiful patchwork that consists of animated scenes
          which comprise of bustling modern cities crowded with motorbikes and
          tuk-tuks, quiet Buddhist temples dotted by orange-robed monks, hill
          tribes selling handicrafts
        </h4>
      </div>
    </div>
  );
};

export default Vid5;
