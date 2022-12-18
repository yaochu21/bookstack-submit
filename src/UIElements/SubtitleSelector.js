import React from "react";
import styled, { css } from "styled-components";

const SubtitleSelector = (props) => {
  const raiseButtonHandler = (event) => {
    props.handleLevel(props.id, -1);
  };

  const lowerButtonHandler = (event) => {
    props.handleLevel(props.id, 1);
  };

  const crossButtonHandler = (event) => {
    props.handleCross(props.id, !props.valid);
  };

  const fontSizeMapper = (level) => {
    switch (level) {
      case 1:
        return 1;
      case 2:
        return 0.85;
      case 3:
        return 0.7;
      default:
        return 0.6;
    }
  };

  let fontSize = fontSizeMapper(props.level);
  let marginLeft = props.level * 1.2;

  return (
    <SubtitleLineControl margin={marginLeft}>
      <SubtitleLine size={fontSize} valid={props.valid}>
        {props.line}
      </SubtitleLine>
      <SubtitleButtonControl>
        <SubtitleButton onClick={raiseButtonHandler}>+</SubtitleButton>
        <SubtitleButton onClick={lowerButtonHandler}>-</SubtitleButton>
        <SubtitleButton onClick={crossButtonHandler}>
          {props.valid ? "x" : "√"}
        </SubtitleButton>
      </SubtitleButtonControl>
    </SubtitleLineControl>
  );
};

const SubtitleLine = styled.div((props) => 
  css`
    font-size: ${props.size}rem;

    ${!props.valid &&
    css`
      text-decoration: line-through;
      color: rgba(0,0,0,0.6);
    `}
  `
);

const SubtitleButtonControl = styled.div(
  css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-left: auto;
  `
);

const SubtitleButton = styled.button(
  css`
    font-size: 0.8rem;
  `
);

const SubtitleLineControl = styled.div(
  (props) =>
    css`
      border-color: black;
      border-radius: 2px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.2rem;
      gap: 1rem;
      margin-left: ${props.margin}rem;

      &:hover {
        opacity: 0.9;
        background-color: rgba(209, 209, 209, 0.5);
        /* box-shadow: 2.2px 2.2px 5px rgba(100, 100, 100, 0.25); */
      }
    `
);

export default SubtitleSelector;