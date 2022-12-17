import React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import {useSelector} from 'react-redux';
import PageDataInput from "../UIElements/PageDataInput";

const StepTwo = (props) => {
    const pageData = useSelector(state => state.pageData.data);

    const titleChangeHandler = (event) => {

    }

    const authorChangeHandler = (event) => {

    }

    const areaChangeHandler = (event) => {

    }

    const dateChangeHandler = (event) => {

    }

    const tagsChangeHandler = (newTags) => {

    }

    return (
        <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
            <PageDataInput field={"Title"}/>
            <PageDataInput field={"Date"}/>
            <PageDataInput field={"Author"}/>
            <PageDataInput field={"Area"}/>
            <PageDataInput field={"Tags"}/>
        </div>
    )



}

export default StepTwo;