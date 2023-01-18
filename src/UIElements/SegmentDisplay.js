import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

const SegmentDisplay = (props) => {

    return (
        <SegmentContainer>
            <SegmentText>
                {props.text}
            </SegmentText>
            <div style={{width:"5%"}}>
                ...
            </div>
            <div styile={{width:"20%"}}>
                {props.order}
            </div>
        </SegmentContainer>
    )
}

const SegmentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-left: 0.1rem;
`

const SegmentText = styled.div`
    width: 75%;
    overflow: hidden;
    white-space: nowrap;
    overflow-wrap: break-word;
    font-size: 15px;
`

export default SegmentDisplay;