import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

import "./index.css";

const HelloWorld = () => {
  const message: string = "Hello, World!!!";

  return (
    <div>
      <h1>{message}</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
