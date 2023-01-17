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
  const subtitleData = useSelector((state) => state.pageData.data.subtitles);
  const dispatch = useDispatch();

  const editLineLevel = (lineID, degree) => {
    // actual operation
    let newSubtitles = JSON.parse(JSON.stringify(subtitleData));
    let editedSubtitle = newSubtitles.find((line) => line.s === lineID);
    let newLevel = editedSubtitle.level + degree;
    newLevel = Math.min(Math.max(newLevel,1),5);
    editedSubtitle.level = newLevel;


    dispatch(setPage({ ...allData, subtitles: newSubtitles }));
  };

  const editLineValidity = (lineID,isValid) => {
    let newSubtitles = JSON.parse(JSON.stringify(subtitleData));
    let editedSubtitle = newSubtitles.find((line) => line.s === lineID);
    editedSubtitle.valid = isValid;

    dispatch(setPage({ ...allData, subtitles: newSubtitles }));
  };

  const editText = (lineID,newText) => {
    let newSubtitles = JSON.parse(JSON.stringify(subtitleData));
    let editedSubtitle = newSubtitles.find((line) => line.s === lineID);
    editedSubtitle.text = newText;

    dispatch(setPage({ ...allData, subtitles: newSubtitles }));
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
