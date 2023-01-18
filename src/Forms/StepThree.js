import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubtitleSelector from "../UIElements/SubtitleSelector";
import { setPage } from "../Store/pageDataSlice";

const StepThree = (props) => {

  const currStep = useSelector((state) => state.stepControl.step);
  let opacity = 1;
  if (currStep < 1) {
    opacity = 0.5;
  }

  // actual data
  const allData = useSelector((state) => state.pageData.data);
  const segmentData = useSelector((state) => state.pageData.data.segments);
  const dispatch = useDispatch();

  let subtitleData = segmentData.filter((segment) => {return (segment.type === "SUBTITLE")});

  const editLineLevel = (lineID, degree) => {
    // actual operation
    let newSegments = JSON.parse(JSON.stringify(segmentData));
    let editedSubtitle = newSegments.find((line) => line.s === lineID);
    let newLevel = editedSubtitle.level + degree;
    newLevel = Math.min(Math.max(newLevel,1),5);
    editedSubtitle.level = newLevel;

    dispatch(setPage({ ...allData, segments: newSegments }));
  };

  const editLineValidity = (lineID,isValid) => {
    let newSegments = JSON.parse(JSON.stringify(segmentData));
    let editedSubtitle = newSegments.find((line) => line.s === lineID);
    editedSubtitle.valid = isValid;

    dispatch(setPage({ ...allData, segments: newSegments }));
  };

  const editText = (lineID,newText) => {
    let newSegments = JSON.parse(JSON.stringify(segmentData));
    let editedSubtitle = newSegments.find((line) => line.s === lineID);
    editedSubtitle.text = newText;

    dispatch(setPage({ ...allData, segments: newSegments }));
  }

  return (
    <React.Fragment>
      <div style={{fontSize:"0.8rem",opacity:opacity}}>编辑区段</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", opacity:opacity }}>
        {subtitleData.map((data) => {
          return (
            <div key={Math.random().toString()}>
              <SubtitleSelector
                line={data.text}
                level={data.level}
                id={data.s}
                valid={data.valid}
                handleText={editText}
                handleLevel={editLineLevel}
                handleCross={editLineValidity}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default StepThree;
