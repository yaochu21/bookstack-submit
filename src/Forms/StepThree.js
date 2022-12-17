import React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';

const StepFour = (props) => {
  const data = useSelector((state) => state.pageData.data);
  const [postedData, setPostedData] = useState("");
  const [postedPageLink, setPostedPageLink] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const onSubmitHandler = (event) => {
    let dataString = JSON.stringify(data);
    setPostedData(dataString);

    // send request to our api
    if (isFetching) {
      return;
    }

    // our api returns bookstack link on success
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <button onClick={onSubmitHandler}> Post </button>
        {isFetching && <ReactLoading type="spinningBubbles" color="gray" width={32} height={32}/>}
      </div>
      {postedData.length > 0 && <div>{postedData}</div>}
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
