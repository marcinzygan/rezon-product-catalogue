import clasess from "./filterMenu.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "@/state/productsDataSlice";
import { setPage } from "@/state/paginationSlice";

const FilterMenu = () => {
  const dispatch = useDispatch();
  //FUNCTION TO FILTER CATEGORIES
  const handleFilter = function (e) {
    e.preventDefault();

    const filterOption = e.target.value;
    console.log(filterOption);
    dispatch(setPage(1));
    dispatch(filterProducts(filterOption));
  };

  return (
    <div className={clasess.filterMenu}>
      <select onChange={handleFilter}>
        <option value="wszystkie">Wszystkie</option>
        <option value="magnesy">Magnesy</option>
        <option value="breloki">Breloki</option>
        <option value="otwieracze">Otwieracze</option>
        <option value="kubki i podkładki">Kubki i Podkładki</option>
        <option value="długopisy">Długopisy</option>
        <option value="czapki i nakrycia głowy">Czapki i Nakrycia głowy</option>
        <option value="bransoletki">Bransoletki</option>
        <option value="tekstylia">Tekstylia</option>
        <option value="ramki do zdjec i termometry">
          Ramki do Zdjec i Termometry
        </option>
        <option value="akcesoria podrozne">Akcesoria Podrozne</option>
        <option value="do auta">Do Auta</option>
        <option value="zapalniczki i popielniczki">
          Zapalniczki i Popielniczki
        </option>
        <option value="upominki biznesowe">Upominki Biznesowe</option>
        <option value="sublimacja">Sublimacja</option>
      </select>
    </div>
  );
};

export default FilterMenu;
