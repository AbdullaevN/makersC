import React from "react";
import "./Page.css";
const Page = () => {
  return (
    <div>
      <div className="input-div">
        <input className="input" type="text" placeholder="Enter Name" />
        <input className="input" type="text" placeholder="Enter Surname" />
        <input className="input" type="text" placeholder="Enter Phone" />
      </div>
    </div>
  );
};

export default Page;
