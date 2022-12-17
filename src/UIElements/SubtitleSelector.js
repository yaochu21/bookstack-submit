import React from "react";
import styled, { css } from "styled-components";

const SubtitleSelector = (props) => {
  let timer = 0;
  let prevent = false;
  const delay = 50;

  const lineClickHandler = (event) => {
    console.log(event);
    event.stopPropagation();
    timer = setTimeout(function () {
      if (!prevent) {
        console.log("line clicked");
      }
      prevent = false;
      props.handleLevel(props.id,1);
    }, delay);
  };

  const lineDoubleClickHandler = (event) => {
    event.stopPropagation();
    clearTimeout(timer);
    prevent = true;
    console.log("line double clicked");
    props.handleLevel(props.id,-1);
  };

  const fontSizeMapper = (level) => {
    switch(level) {
        case 1:
            return 1;
        case 2:
            return 0.85;
        case 3:
            return 0.65;
        default:
            return 0.5;
    }
  }

  let fontSize = fontSizeMapper(props.level)
  let marginLeft = props.level * 1.2;

  return (
    <subtitleLineControl
      style={{ fontSize: `${fontSize}rem`, marginLeft: `${marginLeft}rem` }}
      onClick={lineClickHandler}
      onDoubleClick={lineDoubleClickHandler}
      valid={props.valid}
    >
      {props.line}
    </subtitleLineControl>
  );
};

const subtitleLineControl = styled.button((props) => {
  css`
    border-color: transparent;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 10rem;

    ${!props.valid && css`
        text-decoration: line-through;
    `}

    &:hover {
      opacity: 0.5;
      box-shadow: 5.2px 5.2px 8px rgba(153, 153, 153, 0.25);
    }

    &:focus {
      opacity: 0.5;
      box-shadow: 5.2px 5.2px 8px rgba(153, 153, 153, 0.25);
    }
  `;
});

export default SubtitleSelector;