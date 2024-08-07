import React from "react";

import { RangeSlider } from "@/components/ui/RangeSlider";
import { Category } from "@/components/ui/Category";
import { SelectList } from "@/components/ui/SelectList";
import { Search } from "@/components/ui/icons/Search";
import style from "./style.module.scss";

export const Filter = ({
  data,
  dataRating,
  dataYear,
  onClickOption,
  onClickRating,
  onClickYear,
  onClickFetch,
}) => {
  return (
    <>
      <Category title="Фильтрация" />
      <ul className={style.filterList}>
        <li>
          <SelectList data={data} onClickOption={onClickOption} />
        </li>
        <li>
          Рейтинг
          <RangeSlider
            onClickRating={onClickRating}
            dataRating={dataRating}
            min="0"
            max="10"
            step="0.1"
          />
        </li>
        <li>
          Год
          <RangeSlider
            onClickYear={onClickYear}
            dataYear={dataYear}
            min="1990"
            max="2024"
            step="1"
          />
        </li>
        <li>
          <button
            className={style.button}
            onClick={() => onClickFetch(dataYear, onClickOption, dataRating)}
          >
            Поиск <Search />
          </button>
        </li>
      </ul>
    </>
  );
};
