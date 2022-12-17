import React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const StepFour = (props) => {
  const data = useSelector((state) => state.pageData.data);
  const [postedData, setPostedData] = useState("");
  const [postedPageLink, setPostedPageLink] = useState("");

  const onSubmitHandler = (event) => {
    let dataString = JSON.stringify(data);
    setPostedData(dataString);

    // send request to our api

    // our api returns bookstack link on success
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button> Post </button>
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
