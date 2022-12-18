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
  const subtitlesData = useSelector((state) => state.pageData.data.subtitles);
  const dispatch = useDispatch();

  const editLineLevel = (lineID, degree) => {
    // for demo data
    let currLines = [].concat(lines);
    let target = currLines.find((line) => line.id === lineID);
    target.level += degree;
    target.level = Math.max(1, target.level);
    setLines(currLines);

    // actual operation
    // let newData = [].concat(subtitlesData);
    // let editedSubtitle = newData.find((line) => line.id === lineID);
    // editedSubtitle.level += degree;

    // dispatch(setPage({ ...allData, subtitles: newData }));
  };

  const removeLine = (lineID,isValid) => {
    let currLines = [].concat(lines);
    let target = currLines.find((line) => line.id === lineID);
    target.valid = isValid;
    setLines(currLines);

    // let newData = [].concat(subtitlesData);
    // let editedSubtitle = newData.find((line) => line.id === lineID);
    // editedSubtitle.valid = false;

    // dispatch(setPage({ ...allData, subtitles: newData }));
  };

  return (
    <React.Fragment>
      <div style={{fontSize:"0.8rem"}}>Subtitles</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {lines.map((subtitleData) => {
          return (
            <div key={Math.random().toString()}>
              <SubtitleSelector
                line={subtitleData.text}
                level={subtitleData.level}
                id={subtitleData.id}
                valid={subtitleData.valid}
                handleLevel={editLineLevel}
                handleCross={removeLine}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default StepThree;
