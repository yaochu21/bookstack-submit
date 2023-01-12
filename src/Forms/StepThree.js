import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import SubtitleSelector from "../UIElements/SubtitleSelector";
import { setURL, setPage, clear } from "../Store/pageDataSlice";

const StepThree = (props) => {
  // demo data
  let initLines = [
    { id: 0, level: 1, text: "一，深刻认识", valid: true },
    { id: 1, level: 2, text: "A. 全面深化", valid: true },
    { id: 2, level: 2, text: "B. 战略意义", valid: true },
    { id: 3, level: 1, text: "二，坚决落实", valid: true },
    { id: 4, level: 1, text: "三，始终保持", valid: true },
    { id: 5, level: 1, text: "四，毫不动摇", valid: true },
  ];
  const [lines, setLines] = useState(initLines);

  // actual data
  const allData = useSelector((state) => state.pageData.data);
  const subtitleData = useSelector((state) => state.pageData.data.subtitles);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("Step Three use effect");
  //   setLines(subtitlesData);
  // });

  const editLineLevel = (lineID, degree) => {
    // for demo data
    // let currLines = [].concat(lines);
    // let target = currLines.find((line) => line.id === lineID);
    // target.level += degree;
    // target.level = Math.max(1, target.level);
    // setLines(currLines);

    // actual operation
    let newSubtitles = JSON.parse(JSON.stringify(subtitleData));
    let editedSubtitle = newSubtitles.find((line) => line.s === lineID);
    let newLevel = editedSubtitle.level + degree;
    newLevel = Math.min(Math.max(newLevel,1),5);
    editedSubtitle.level = newLevel;


    dispatch(setPage({ ...allData, subtitles: newSubtitles }));
  };

  const editLineValidity = (lineID,isValid) => {
    // let currLines = [].concat(lines);
    // let target = currLines.find((line) => line.id === lineID);
    // target.valid = isValid;
    // setLines(currLines);

    let newSubtitles = JSON.parse(JSON.stringify(subtitleData));
    let editedSubtitle = newSubtitles.find((line) => line.s === lineID);
    editedSubtitle.valid = isValid;

    dispatch(setPage({ ...allData, subtitles: newSubtitles }));
  };

  const editText = (lineID,newText) => {
    // let currLines = [].concat(lines);
    // let target = currLines.find((line) => line.id === lineID);
    // target.text = newText;
    // setLines(currLines);

    let newSubtitles = JSON.parse(JSON.stringify(subtitleData));
    let editedSubtitle = newSubtitles.find((line) => line.s === lineID);
    editedSubtitle.text = newText;

    dispatch(setPage({ ...allData, subtitles: newSubtitles }));
  }

  return (
    <React.Fragment>
      <div style={{fontSize:"0.8rem"}}>Subtitles</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
