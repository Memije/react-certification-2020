import React from "react";
import styled from "styled-components";

import Grid from "../Grid";
import Header from "../Header";

import data from "../../mock/youtube-videos-mock";

const LayoutContainer = styled.div`
  min-width: 24rem;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Grid data={data} />
    </LayoutContainer>
  );
};

export default Layout;
