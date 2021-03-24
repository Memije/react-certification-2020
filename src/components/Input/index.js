import styled from "styled-components";

import colors from "../../theme";

const Input = styled.input`
  line-height: 1;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: ${colors.white};

  &:focus,
  &:active {
    border-bottom: 2px solid ${colors.white};
    margin-bottom: -2px;
    outline: none;
  }
`;

export default Input;
