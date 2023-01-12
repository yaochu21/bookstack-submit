import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';

const StepFour = (props) => {
  const data = useSelector((state) => state.pageData.data);
  const url = useSelector((state) => state.pageData.url);
  console.log(data)

  const [postedPageLink, setPostedPageLink] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");

  const onSubmitHandler = (event) => {
    if (isFetching) {
      return;
    }
    setIsFetching(true);

    const api = "https://bookstack.laodongqushi.com/process";
    const postData = { url: url, data: data };

    fetch(api, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
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

        // data inspection and cleaning
        console.log(jsonObject);
        let cleanedData = jsonObject;
        let bookstackURL = cleanedData.bookstackURL;
        let bookStackURL = cleanedData.errorMessage;
      })
      .catch(handleFetchError);
  };

  const handleFetchError = (error) => {
    console.log("Error during fetch: " + error);
    setIsFetching(false);
    setErrorMessage("Error during fetch");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop:"1rem" }}>
      <div>
        <button onClick={onSubmitHandler}> Post </button>
        {isFetching && <ReactLoading type="spinningBubbles" color="gray" width={32} height={32}/>}
      </div>
      {postedPageLink.length > 0 && (
        <div>
          <span> "Success! The page you created is at: " </span>
          <a href={postedPageLink}>{postedPageLink}</a>
        </div>
      )}
    </div>
  );
};

export default StepFour;
