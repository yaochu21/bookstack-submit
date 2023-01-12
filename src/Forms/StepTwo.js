import React from "react";
import { useState, useRef } from "react";
import styled, { css } from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import {setPage} from '../Store/pageDataSlice';
import PageDataInput from "../UIElements/PageDataInput";

const StepTwo = (props) => {
    const pageData = useSelector(state => state.pageData.data);
    const dispatch = useDispatch();

    const titleChangeHandler = (event) => {
        console.log("title change handler:"+event.target.value);
        dispatch(setPage({
            ...pageData,
            title: event.target.value
        }));
    }

    const authorChangeHandler = (event) => {
        console.log("author change handler:"+event.target.value);
        dispatch(setPage({
            ...pageData,
            author: event.target.value
        }))
    }

    const areaChangeHandler = (event) => {
        console.log("area change handler:"+event.target.value);
        dispatch(setPage({
            ...pageData,
            area: event.target.value
        }))
    }

    const dateChangeHandler = (event) => {
        console.log("date change handler:"+event.target.value);
        dispatch(setPage({
            ...pageData,
            date: event.target.value
        }))
    }

    const tagsChangeHandler = (event) => {
        let newTags = event.target.value.split(',');
        dispatch(setPage({
            ...pageData,
            tags: newTags
        }))
    }

    return (
        <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
            <PageDataInput field={"Title"} edit={titleChangeHandler} value={pageData.title}/>
            <PageDataInput field={"Date"} edit={dateChangeHandler} value={pageData.date}/>
            <PageDataInput field={"Author"} edit={authorChangeHandler} value={pageData.author}/>
            <PageDataInput field={"Area"} edit={areaChangeHandler} value={pageData.area}/>
            <PageDataInput field={"Tags"} edit={tagsChangeHandler} value={pageData.tags.join()}/>
        </div>
    )



}

export default StepTwo;