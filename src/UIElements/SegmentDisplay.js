import React from "react";
import styled, { css } from "styled-components";

const SegmentDisplay = (props) => {

    return (
        <SegmentContainer>
            <SegmentText>
                {props.text.slice(3,props.text.length - 4)}
            </SegmentText>
            <div style={{width:"5%"}}>
                ----
            </div>
            <div styile={{width:"20%"}}>
                <span style={{fontWeight:"bold",justifyContent:"flex-end"}}> {props.order} </span>
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
    /* white-space: nowrap;
    overflow: hidden; */
    width: 100%;
    overflow: visible;
    overflow-wrap: break-word;
    font-size: 15px;
    line-height: 25px;
`

export default SegmentDisplay;