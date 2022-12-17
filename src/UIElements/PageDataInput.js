import styled, { css } from "styled-components";

const PageDataInput = (props) => {
  return (
    <DataInputControl>
      <div style={{ display: "flex" }}>
        <DataInputLabel>{props.field}</DataInputLabel>
      </div>

      <DataInputField onChange={props.edit} value={props.value} />
    </DataInputControl>
  );
};
const DataInputControl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
`;

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
