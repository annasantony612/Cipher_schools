import React, { Component } from "react";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import tw from "../assets/tw.png";
import VideoBox from "./VideoBox";

export class Firstpg extends Component {
  render() {
    return (
      <div className="Firstpg">
        <div class="navbar">
          
          <h1>Travello</h1>
          <nav>
            <ul>
              <li>Features</li>
              <li>About us</li>
              <li>Pricing</li>
            </ul>
          </nav>
        </div>
        <div>
          <h1 className="Heading">Explore The World!!</h1>
        </div>

        <div className="searchbox">
          <input
            className="input"
            // type="text"
            // id="message"
            // name="message"
            // onChange={handleChange}
            // value={message}
          />
        </div>
        <div className="VideoArea">
          <VideoBox />
        </div>
        <div className="social-links">
            <img src={fb}/>
            <img src={ig}/>
            <img src={tw}/>
        </div>
      </div>
    );
  }
}

export default Firstpg;

