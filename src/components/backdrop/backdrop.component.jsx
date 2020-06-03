import React from "react";
import "./backdrop.style.scss";

import { useDispatch } from "react-redux";

//?ACTIONS
import { toggleSidebar } from "../../redux/toggle/toggleAction";

const Backdrop = () => {
  const dispatch = useDispatch();

  return (
    <div className="backdrop" onClick={() => dispatch(toggleSidebar())}>
      {"\u00A0"}
    </div>
  );
};

export default Backdrop;
