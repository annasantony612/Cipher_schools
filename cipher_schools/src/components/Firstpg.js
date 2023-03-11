import React, { Component } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export class Firstpg extends Component {
  render() {
    return (
      <div className="Firstpg">
        <div className="searchbox">
          <input
            className="input"
            type="text"
            // id="message"
            // name="message"
            // onChange={handleChange}
            // value={message}
          />

          {/* <svg data-testid="SearchIcon"></svg> */}
        </div>
      </div>
    );
  }
}

export default Firstpg;
