import React from "react";

import Grid from "../Grid";
import Header from "../Header";

import data from "../../mock/youtube-videos-mock";

const Layout = () => {
  return (
    <div>
      <Header />
      <Grid data={data} />
    </div>
  );
};

export default Layout;
