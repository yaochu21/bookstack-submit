import StepOne from "./Forms/StepOne";
import StepTwo from "./Forms/StepTwo";
import StepThree from "./Forms/StepThree";
import StepFour from "./Forms/StepFour";
import StepFive from "./Forms/StepFive";

function App() {

  return (
    <div>
      <div
        className="App"
        style={{
          position: "absolute",
          marginLeft: "10rem",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "20rem",
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <StepFive />
      </div>
    </div>
  );
}

export default App;
