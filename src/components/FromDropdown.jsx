import React from "react";

const FromDropdown = (props) => {
  let data = props.data;

  return (
    <select name="Work Experience" id="work" className="mb-2">
      {data.map((optionData, index) => {
        return <option key={index}>{optionData.name}</option>;
      })}
    </select>
  );
};

export default FromDropdown;
