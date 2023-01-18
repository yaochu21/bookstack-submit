import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

const ImageDisplay = (props) => {

  const onImageClickHandler = (event) => {
    props.editImageValidity(props.image.id)
  };

  return (<ImageDisplayBox valid={props.image.valid} onClick={onImageClickHandler}>
    <Image referrerPolicy="no-referrer" src={props.image.url}/>
  </ImageDisplayBox>)
};

const ImageDisplayBox = styled.div(
  (props) => css`
    height: 10rem;
    width: 10rem;
    padding: 1px;
    border: dashed;
    border-width: 2px;
    border-radius: 2px;
    border-color: black;

    ${!props.valid &&
    css`
      opacity: 20%;
      border-color: rgb(100,100,100);
    `}
  `
);

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  font-size: 10px;
`;

export default ImageDisplay;
