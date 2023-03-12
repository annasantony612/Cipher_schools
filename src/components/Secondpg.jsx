import React from "react";
import SecpgBG from "../assets/SecpgBG.png"
import like from "../assets/like.png"
import Button from "./Button";
import { useState } from 'react';

const Secondpg = ({link}) => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
      setValue(value + 1);
    };
  return (
    <div className="secpgMain">
       <div class="navbar">
          
          <h2>Travello</h2>
          <nav>
            <ul>
              <li>Features</li>
              <li>About us</li>
              <li>Pricing</li>
            </ul>
          </nav>
        </div>
       <div className="secpgsub">
                <div className="sVidL">
                <video src={link} autoPlay loop  />
                <div className="like">
                
      <button onClick={handleClick}>  <img src={like} /></button>
      {value} likes
                {/* <Button >
                <img src={like} />
              
                    </Button>
                    23 likes */}
                </div>
                
                
              
                
                
                <div className="comments">
                    <h1>Comments</h1>
                    <h3> Arun Jadav</h3>
                    <p> Your edits shows that by editing skill u can make long and boring video short and enjoying...🤟💙</p>
                    <h3> Sarah-Ann Maningas</h3>
                    <p> 

1 year ago
this got me FEELIN' LIKE I wanna travel to Spain!</p>
                    <h3> Fernandezz Difles</h3>
                    <p> This edit (and everything else too) is so pro level! Not even a second is wasted!  Would like a breakdown video of how it was made!</p>
                </div>
                </div>
                {/* <div className="sVidR">
                <h2></h2>
                </div> */}
       
       </div>
        
        
    </div>
  );
};

export default Secondpg;