import React, { useState } from "react";
import "./header.css";

const Header = (props: { onDataChange: (arg0: string) => void; }) => {
  const [value, setValue] = useState("");

  const handleChange = () => {
    props.onDataChange(value);
  };

  const add = () => {
    handleChange();
  }

  return (
    <div>
      <div>TODO List</div>
      <div className="header-container">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <a onClick={add} className="header-btn-add">Add</a>
      </div>
    </div>
  );
};

export default Header;
