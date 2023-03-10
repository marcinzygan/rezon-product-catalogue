import clasess from "./filterMenu.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "@/state/productsDataSlice";
import { setPage } from "@/state/paginationSlice";
import { setIsSearchActive } from "@/state/productSearchSlice";

const FilterMenu = () => {
  const dispatch = useDispatch();

  //FUNCTION TO FILTER CATEGORIES
  const handleFilter = function (e) {
    e.preventDefault();

    const filterOption = e.target.value;
    console.log(filterOption);
    // dispatch(setPage(1));
    dispatch(filterProducts(filterOption));
    dispatch(setIsSearchActive());
    // CHANGE SELECT OPTION TO DEFAULT AFTER 2 SEC
    setTimeout(() => {
      e.target.value = "DEFAULT";
    }, 2000);
  };

  return (
    <div className={clasess.filterMenu}>
      <select
        onChange={handleFilter}
        className={clasess.select}
        defaultValue="DEFAULT"
      >
        <option value="DEFAULT" disabled hidden>
          Wybierz Kategorię
        </option>
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
        <option value="dziecięce">Dziecięce</option>
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
