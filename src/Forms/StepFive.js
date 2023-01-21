import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';

const StepFive = (props) => {
  const data = useSelector((state) => state.pageData.data);
  const url = useSelector((state) => state.pageData.url);
  //console.log(data)

  const [success, setSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");

  const currStep = useSelector((state) => state.stepControl.step);
  let opacity = 1;
  let disabled = false;
  if (currStep < 1) {
    opacity = 0.5;
    disabled = true;
  }

  const onSubmitHandler = (event) => {

    console.log(data);

    if (isFetching) {
      return;
    }
    setIsFetching(true);
    setSuccess(false);
    setErrorMessage("")

    const api = "https://bookstack.laodongqushi.com/publish";
    //const api = "http://127.0.0.1:5000/publish";
    const postData = { url: url, data: JSON.stringify(data) };

    fetch(api, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData)
    })
      .then((response) => {

        if (!response.ok) {
            throw new Error("invalid response: status code " + response.status);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || (contentType.indexOf("application/json") < 0)) {
          throw new TypeError("fetched data was not json");
        }

        return response.json();
      })
      .then((jsonObject) => {

        setIsFetching(false);
        setErrorMessage("")
        setSuccess(true)
        setErrorMessage("")
        console.log(jsonObject)
        
      })
      .catch(handleFetchError);
  };

  const handleFetchError = (error) => {
    console.log("Error during fetch: " + error);
    setIsFetching(false);
    setErrorMessage("Error during fetch");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop:"1rem", gap:"1rem", opacity:opacity }}>
      <div>
        <button onClick={onSubmitHandler} disabled={disabled}> Post </button>
      </div>
      {isFetching && <ReactLoading type="spinningBubbles" color="gray" width={32} height={32}/>}
      {success && (
        <div>
          <span style={{color:"black",fontSize:"0.75rem"}}> Success! </span>
        </div>
      )}
      {errorMessage.length > 0 && (<div><span style={{color:"red",fontSize:"0.75rem"}}>{errorMessage}</span></div>)}
    </div>
  );
};

export default StepFive;
