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
        dispatch(setPage({
            ...pageData,
            title: event.target.value
        }));
    }

    const authorChangeHandler = (event) => {
        dispatch(setPage({
            ...pageData,
            author: event.target.value
        }))

    }

    const areaChangeHandler = (event) => {
        dispatch(setPage({
            ...pageData,
            area: event.target.value
        }))
    }

    const dateChangeHandler = (event) => {
        dispatch(setPage({
            ...pageData,
            date: event.target.value
        }))
    }

    const tagsChangeHandler = (newTags) => {

    }

    return (
        <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
            <PageDataInput field={"Title"} edit={titleChangeHandler} value={pageData.title}/>
            <PageDataInput field={"Date"} edit={dateChangeHandler} value={pageData.date}/>
            <PageDataInput field={"Author"} edit={authorChangeHandler} value={pageData.author}/>
            <PageDataInput field={"Area"} edit={areaChangeHandler} value={pageData.area}/>
            <PageDataInput field={"Tags"} edit={tagsChangeHandler} value={pageData.tags}/>
        </div>
    )



}

export default StepTwo;