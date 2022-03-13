import { Button } from "@mui/material";
import React from "react";

export const ButtonContained = ({ text = "", onClick = null as any }) => {
  return (
    <Button
      style={{ textTransform: "none", backgroundColor: "#5048E5" }}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const ButtonOutlined = ({ text = "", onClick = null as any }) => {
  return (
    <Button
      style={{
        textTransform: "none",
        backgroundColor: "#fff",
        borderColor: "#5048E5",
        color: "#5048E5",
      }}
      variant="outlined"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
