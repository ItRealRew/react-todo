import React from "react";
import "./Elem.css";
import { Element } from "../../models/elements";

function Elem(props: Element)  {
  const { Name, Done } = props;

  const delElem = () => {
    console.log("Delete");
  };

  return (
    <div className="elem">
      <div className="elem-text">{Name}</div>
      <div className="elem-btn">
        <a className="elem-btn-all elem-btn-done btn">Done</a>
        <a onClick={delElem} className="elem-btn-all elem-btn-del btn">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Elem;
