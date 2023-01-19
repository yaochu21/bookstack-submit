import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { setPage } from "../Store/pageDataSlice";
import ImageDisplay from "../UIElements/ImageDisplay";
import SegmentDisplay from "../UIElements/SegmentDisplay";

const StepFour = (props) => {
  const currStep = useSelector((state) => state.stepControl.step);
  let available = true;
  let opacity = 1;
  if (currStep < 1) {
    opacity = 0.5;
    available = false;
  }

  const allData = useSelector((state) => state.pageData.data);
  const imageData = useSelector((state) => state.pageData.data.imgs);
  const segmentData = useSelector((state) => state.pageData.data.segments);

  const numSegments = segmentData.length;

  const dispatch = useDispatch();
  console.log(imageData)

  const editImageValidity = (id) => {
    if (!available) {
      return;
    }

    let newImages = JSON.parse(JSON.stringify(imageData));
    let editedImage = newImages.find((img) => img.id === id);
    editedImage.valid = !editedImage.valid;
    dispatch(setPage({ ...allData, imgs: newImages }));
  };

  const editImageOrder = (value,id) => {
    if (!available) {
      return;
    }

    let newImages = JSON.parse(JSON.stringify(imageData));
    let editedImage = newImages.find((img) => img.id === id);
    editedImage.order = parseInt(value)
    dispatch(setPage({ ...allData, imgs: newImages }));
  }

  return (
    <React.Fragment>
      <div style={{ fontSize: "0.8rem", opacity: opacity }}>编辑图片</div>
      <ImagesContainer style={{ opacity: opacity }}>
        {imageData.map((image) => {
          return (
            <ImageDisplay
              image={image}
              editImageValidity={editImageValidity}
              editImageOrder={editImageOrder}
              key={Math.random().toString()}
              numSegments={numSegments}
              available={available}
            />
          );
        })}
      </ImagesContainer>
      <div style={{ fontSize: "0.8rem", opacity: opacity }}>段落位置参考</div>
      <ParagraphContainer style={{opacity: opacity}}>
        {segmentData.map((segment) => {
          if (segment.type === "BODY") {
            return (
              <SegmentDisplay text={segment.string} order={segment.order} key={Math.random().toString()}/>
            )
          }
          else {
            return null;
          }
        })}
      </ParagraphContainer>
    </React.Fragment>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  grid-auto-flow: column;
  grid-auto-flow: row;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  width: 45rem;
  padding: 3px;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 45rem;
  padding: 3px
`

export default StepFour;
