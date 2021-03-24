import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};

  &.clear {
    background: transparent;
    color: ${(props) => props.theme.foreground};
  }

  &.bordered {
    border: 2px solid ${(props) => props.theme.background};
  }

  &.round {
    padding: 0.25rem 0.55rem;
    border-radius: 9999px;
  }
`;

export { Button };
