import React from "react";
import Locos from "../assets/Locos.mp4";
import Button from "./Button";

const Vid3 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        {/* <div className="video"></div> */}
        <video src={Locos} autoPlay loop muted />

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
        <h1>ILocos in 1 Minute</h1>
        <h6>78K views</h6>
        <h4 className="places">
          Ilocos Norte is known as a northern tourist destination, where one can
          find upper class hotels and beach resorts famous among expatriates
        </h4>
      </div>
    </div>
  );
};

export default Vid3;
