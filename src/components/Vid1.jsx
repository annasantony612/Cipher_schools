import React from "react";
import Italy from "../assets/Italy.mp4";
import { Link , useNavigate} from 'react-router-dom';
import Button from "./Button";

const Vid1 = () => {
  return (
    <div className="VidMain">
      <div className="VideoLeft">
        
        <video src={Italy} autoPlay loop muted />
         <div>
         {/* <Link to="/Secondpg">
         <Button
            // onClick={() => alert("Button clicked!")}
            // className="buttontext"
          >
            Tap to play
          </Button>
        </Link> */}
        <Link to="/Secondpg" link={Italy}>
        <Button
            // onClick={() => alert("Button clicked!")}
            // className="buttontext"
          >
            Tap to play
          </Button>
        </Link>
          
        </div>
      </div>
      <div className="VideoRight">
        <h1>Italy|Travel Video</h1>
        <h6>55K views</h6>
        <h4 className="places">
          Beautiful landscapes, amazing culinary delicacies, fashion, arts and
          history, ... Italian beauty and perfection is enclosed in this Mark
          Twain's quote.
        </h4>
      </div>
    </div>
  );
};

export default Vid1;