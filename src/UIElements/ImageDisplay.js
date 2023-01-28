import React from "react";
import styled, { css } from "styled-components";

const ImageDisplay = (props) => {
  const onImageDoubleClickHandler = (event) => {
    props.editImageValidity(props.image.id);
  };

  const onSelectDropdownHandler = (event) => {
    console.log(event.target.value);
    props.editImageOrder(event.target.value, props.image.id);
    event.stopPropagation();
  };

  let optionValues = [];
  for (let i = 0; i < props.numSegments; i++) {
    optionValues.push(i * 100);
  }
  //let options = optionValues.map((option) => {return (<option selected={(props.image.order === option) ? true : null} value={option} key={Math.random().toString()}>{option.toString()}</option>)})
  let options = null;
  if (props.paragraphOptions) {
    options = props.paragraphOptions.map((option) => {
      return (
        <option
          selected={props.image.order === option.value ? true : null}
          value={option.value}
          key={Math.random().toString()}
        >
          {option.label}
        </option>
      );
    });
  }

  return (
    <ImageDisplayBox
      valid={props.image.valid}
      onDoubleClick={onImageDoubleClickHandler}
    >
      <Image referrerPolicy="no-referrer" src={"data:image/png;base64, " + props.image.url} />
      <ImageOrderSelect
        onChange={onSelectDropdownHandler}
        disabled={props.image.valid && props.available ? null : true}
      >
        {options}
      </ImageOrderSelect>
    </ImageDisplayBox>
  );
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
      border-color: rgb(100, 100, 100);
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

const ImageOrderSelect = styled.select`
  position: relative;
  width: 5.2rem;
  bottom: 10.2rem;
  left: 4.5rem;
  box-shadow: 4px 4px 8px rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  /* border: dashed; */
`;

export default ImageDisplay;
