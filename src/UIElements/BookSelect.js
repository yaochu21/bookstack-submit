import React from "react";
import styled, { css } from "styled-components";
import { DataInputControl, DataInputLabel } from "./PageDataInput";

const BookSelect = (props) => {
    let options = [
        { label: "大学生", value: 1 },
        { label: "生活服务行业综合", value: 2 },
        { label: "办公室白领综合", value: 6 },
        { label: "教育业", value: 9 },
        { label: "平台创作者", value: 11 },
        { label: "工程与建筑", value: 12 },
        { label: "餐饮业", value: 14 },
        { label: "模板", value: 15 },
        { label: "职业教育学生", value: 16 },
        { label: "总体", value: 17 },
        { label: "公益行业从业者", value: 18 },
        { label: "物业管理业", value: 19 },
        { label: "女性劳动者", value: 21 },
        { label: "公共服务行业", value: 22 },
    ];

    let value = { label: "大学生", value: 1 };
    for (let i = 0; i < options.length; i++) {
        if (props.curr_id === options[i].value) {
            value = options[i]
            console.log("yes")
        }
    }

    const onSelectHandler = (event) => {
        console.log(event.target.value)
        props.bookSelectHandler(event.target.value)
    }

    return (
        <DataInputControl>
            <div style={{ display: "flex" }}>
                <DataInputLabel>{props.field}</DataInputLabel>
            </div>
            <select style={{ width: "40%", height: "1.35rem" }} onChange={onSelectHandler} value={value.value} disabled={props.readonly ? true : null}>
                {options.map((option) => {
                    return <option value={option.value} key={Math.random().toString()}>{option.label}</option>;
                })}
            </select>
        </DataInputControl>
    );
};

export default BookSelect;
