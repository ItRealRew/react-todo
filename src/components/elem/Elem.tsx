import React from "react";
import "./Elem.css";

function Elem() {
  return (
    <div className="elem">
      <div>хуй</div>
      <div className="elem-btn">
        <a className="elem-btn-all elem-btn-done">Done</a>
        <a className="elem-btn-all elem-btn-del">Delete</a>
      </div>
    </div>
  );
}

export default Elem;
