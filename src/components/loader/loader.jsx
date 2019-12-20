import React from "react";
import loadersrc from "../../assets/loader.gif";

const Loader = props => (
  <div>
    <img style={{ width: 75 }} alt="loading.." src={loadersrc} />
  </div>
);

export default Loader;
