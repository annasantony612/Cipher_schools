import { Box } from "@mui/material";
import React from "react";

const VideoBox = () => {
  return (
    <div
      style={{
        marginLeft: "40%",
        marginTop: "60px",
        width: "30%",
      }}
    >
      <Box color="black" bgcolor="palevioletred" p={10}>
        Greetings from GeeksforGeeks!
      </Box>
    </div>
  );
};

export default VideoBox;
