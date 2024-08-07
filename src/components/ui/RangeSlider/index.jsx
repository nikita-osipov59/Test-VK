import React from "react";

import style from "./style.module.scss";

export const RangeSlider = ({
  min,
  max,
  step,
  onClickYear,
  onClickRating,
  dataYear,
  dataRating,
}) => {
  return (
    <>
      <input
        onChange={
          onClickYear
            ? (e) => onClickYear(e.target.value)
            : (e) => onClickRating(e.target.value)
        }
        type="range"
        className={style.input}
        min={min}
        max={max}
        step={step}
        value={dataYear ? dataYear : dataRating}
      />
      <div>{dataYear ? dataYear : dataRating}</div>
    </>
  );
};
