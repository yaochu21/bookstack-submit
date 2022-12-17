import { useState, useEffect, useRef } from "react";
import StepOne from "./Forms/StepOne";
import StepTwo from "./Forms/StepTwo";
import StepThree from "./Forms/StepThree";
import StepFour from "./Forms/StepFour";
import store from "./Store/store";

function App() {
  return (
    <div
      className="App"
      style={{
        position: "absolute",
        marginLeft: "10rem",
        marginTop: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem"
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
}

export default App;
