import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import ReactLoading from 'react-loading';
import {useDispatch} from 'react-redux';
import {setURL,setPage} from '../Store/pageDataSlice';
import {setStep} from '../Store/stepControlSlice';

const StepOne = (props) => {
  const [urlInput, setURLInput] = useState("Enter url here...");
  const [isDefault, setIsDefault] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");

  const dispatch = useDispatch()

  const onChangeHandler = (event) => {
    setURLInput(event.target.value);
    if (errorMessage.length > 0) {
      setErrorMessage("");
    }
  };

  const onFocusHandler = (event) => {
    if (isDefault || (errorMessage === "Invalid URL")) {
      setURLInput("");
      setIsDefault(false);
      setErrorMessage("");
    }
  };

  const onBlurHandler = (event) => {
    if (urlInput.length <= 0) {
      setIsDefault(true);
      setURLInput("Enter url here...");
    }
  };

  const urlSubmitHandler = async (event) => {
    console.log("submitting url");

    // string validation
    if (!validateHttpURL(urlInput)) {
      console.log("not a valid http url");
      setErrorMessage("Invalid URL")
      return;
    }

    if (isFetching) {
      return;
    }
    
    // const api = "https://bookstack.laodongqushi.com/process";
    const api = "http://127.0.0.1:5000/process";
    const data = { url: urlInput, data: null };

    setIsFetching(true);
    fetch(api, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
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
        dispatch(setStep(1));

        // data inspection and cleaning
        console.log(jsonObject);
        let cleanedData = jsonObject;

        cleanedData.area = "";
        cleanedData.rtype = [""];
        cleanedData.author = [""];
        // cleanedData.imgs = [
        //   {
        //     url: "https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d",
        //     valid: true,
        //     id: 0,
        //   },
  
        //   {
        //     url: "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_square.jpg",
        //     valid: true,
        //     id: 1,
        //   },
        //   {
        //     url: "https://freshpet.com/wp-content/uploads/2019/09/house-cat-281511_640.jpg",
        //     valid: true,
        //     id: 2,
        //   },
        //   {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Gdp_per_capita_of_the_administrative_division_in_China.png",
        //     valid: true,
        //     id: 3,
        //   },
        // ];

        // write data to store
        dispatch(setURL(urlInput));
        dispatch(setPage(cleanedData));
      })
      .catch(handleFetchError);
  };

  const handleFetchError = (error) => {
    console.log("Error during fetch: " + error);
    setIsFetching(false);
    setErrorMessage("Error during fetch");
  };

  const validateHttpURL = (urlString) => {
    try {
      let urlObject = new URL(urlString);
      if (urlObject.protocol.indexOf("http") !== 0) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <StepOneContainer>
      <URLInput
        value={urlInput}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        isDefault={isDefault}
      ></URLInput>
      <button onClick={urlSubmitHandler}> Submit </button>
      {isFetching && <ReactLoading type="spinningBubbles" color="gray" width={32} height={32}/>}
      {(errorMessage.length > 0) && <ErrorMessageLabel> {errorMessage} </ErrorMessageLabel>}
    </StepOneContainer>
  );
};

const URLInput = styled.input(
  (props) => css`
    width: 15rem;
    overflow: hidden;
    ${props.isDefault &&
    css`
      font-style: italic;
      color: rgba(0, 0, 0, 0.5);
    `}
  `
);

const ErrorMessageLabel = styled.div`
  color: red;
  font-size: 0.75rem;
`;

const StepOneContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-right: auto;
`

export default StepOne;
