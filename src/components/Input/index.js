import styled from "styled-components";

const Input = styled.input`
  line-height: 1;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;

  &:focus,
  &:active {
    border-bottom: 2px solid white;
    margin-bottom: -2px;
    outline: none;
  }
`;

export default Input;
