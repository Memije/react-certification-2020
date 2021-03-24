import React from "react";
import styled from "styled-components";

import Input from "../Input";
import { Button } from "../Button";
import colors, { primary } from "../../theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  margin-bottom: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom-width: 2px;
  background-color: ${colors.black};
  color: ${colors.white};
  align-items: center;
`;

const HeaderHamburger = styled.div`
  width: 0px;
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;
`;

const HeaderSearchBar = styled.div`
  width: 48rem;
  height: 2rem;
  display: flex;
`;

const HeaderActions = styled.div`
  width: 0px;
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderHamburger>
        <Button className="clear">
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </HeaderHamburger>
      <HeaderSearchBar>
        <Input placeholder="Search something..." />
      </HeaderSearchBar>
      <HeaderActions>
        <Button className="clear">
          <FontAwesomeIcon icon={faMoon} />
        </Button>
        <Button theme={primary}>Log In</Button>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
