import styled, { css } from "styled-components";

const PageDataInput = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        width: "100%",
      }}
    >
      <div style={{display:"flex"}}>
        <DataInputLabel>{props.field}</DataInputLabel>
      </div>

      <DataInputField />
    </div>
  );
};

const DataInputLabel = styled.div`
  width: 2.2rem;
  font-size: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

const DataInputField = styled.input`
  width: 100%;
`;

export default PageDataInput;
