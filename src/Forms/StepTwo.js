import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../Store/pageDataSlice";
import PageDataInput from "../UIElements/PageDataInput";
import BookSelect from "../UIElements/BookSelect";

const StepTwo = (props) => {
  const pageData = useSelector((state) => state.pageData.data);
  // console.log(pageData)
  const dispatch = useDispatch();

  const currStep = useSelector((state) => state.stepControl.step);
  let opacity = 1;
  let readonly = false;
  if (currStep < 1) {
    opacity = 0.5;
    readonly = true;
  }

  const titleChangeHandler = (event) => {
    console.log("title change handler:" + event.target.value);
    dispatch(
      setPage({
        ...pageData,
        title: event.target.value,
      })
    );
  };

  const authorChangeHandler = (event) => {
    console.log("author change handler:" + event.target.value);
    let authors = event.target.value.split(",");
    dispatch(
      setPage({
        ...pageData,
        author: authors,
      })
    );
  };

  const areaChangeHandler = (event) => {
    console.log("area change handler:" + event.target.value);
    dispatch(
      setPage({
        ...pageData,
        area: event.target.value,
      })
    );
  };

  const dateChangeHandler = (event) => {
    console.log("date change handler:" + event.target.value);
    dispatch(
      setPage({
        ...pageData,
        date: event.target.value,
      })
    );
  };

  const rtypeChangHandler = (event) => {
    console.log("rtype change handler:" + event.target.value);
    let rtype = event.target.value.split(",");
    dispatch(
      setPage({
        ...pageData,
        rtype: rtype,
      })
    );
  };

  const tagsChangeHandler = (event) => {
    let newTags = event.target.value.split(",");
    dispatch(
      setPage({
        ...pageData,
        tags: newTags,
      })
    );
  };

  const bookSelectHandler = (value) => {
    dispatch(
      setPage({
        ...pageData,
        book_id: parseInt(value)
      })
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem",opacity:opacity }}>
      <PageDataInput
        field={"文章标题"}
        edit={titleChangeHandler}
        value={pageData.title}
        readonly={readonly}
      />
      <PageDataInput
        field={"发布年份"}
        edit={dateChangeHandler}
        value={pageData.date}
        readonly={readonly}
      />
      <PageDataInput
        field={"作者"}
        edit={authorChangeHandler}
        value={pageData.author.join()}
        readonly={readonly}
      />
      <PageDataInput
        field={"地区"}
        edit={areaChangeHandler}
        value={pageData.area}
        readonly={readonly}
      />
      <PageDataInput
        field={"报告类型"}
        edit={rtypeChangHandler}
        value={pageData.rtype.join()}
        readonly={readonly}
      />
      <PageDataInput
        field={"关键词"}
        edit={tagsChangeHandler}
        value={pageData.tags.join()}
        readonly={readonly}
      />
      <BookSelect field={"图书"} bookSelectHandler={bookSelectHandler} curr_id={pageData.book_id} readonly={readonly}/>
    </div>
  );
};

export default StepTwo;
