import React from "react";

export const SelectList = ({ data, onClickOption }) => {
  return (
    <div>
      <select onChange={(e) => onClickOption(e.target.value)}>
        <option>Все</option>
        {data &&
          data.map((item, index) => <option key={index}>{item.name}</option>)}
      </select>
    </div>
  );
};
