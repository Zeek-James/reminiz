import React, { useState } from "react";
import { RightNav } from "./RightNav";

export const Buger = () => {
  const [buger, setBuger] = useState(false);

  const toggle = () => setBuger(!buger);

  return (
    <div>
      <div className={!buger ? "menu_btn" : "menu_btn close"} onClick={toggle}>
        <div className="btn_bar" />
        <div className="btn_bar" />
        <div className="btn_bar" />
          </div>
          <RightNav buger={ buger}/>
          
    </div>
  );
};
