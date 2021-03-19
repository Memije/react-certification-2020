import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  background: ${(props) => (props.primary ? "#ff2e63" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#ff2e63")};

  &.clear {
    background: transparent;
    color: white;
  }

  &.bordered {
    border: 2px solid #ff2e63;
  }

  &.round {
    padding: 0.25rem 0.55rem;
    border-radius: 9999px;
  }
`;

export { Button };
