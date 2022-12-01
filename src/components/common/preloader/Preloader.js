import React from "react";
import Loading from "../../../assets/images/Loading.svg";

let Preloader = (props) => {
  return (
    <div>
      <img src={Loading} />
    </div>
  );
};

export default Preloader;
