import { createContext, useContext, useReducer } from "react";
import { useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [backendData, setBackendData] = useState({
    loading: true,
    error: null,
    productsData: [],
  });

  const getBackendData = async () => {
    try {
      const response = await fetch("/api/products");
      const finalData = await response.json();
      setBackendData({
        ...backendData,
        loading: false,
        productsData: [...finalData.products],
      });
    } catch (error) {
      setBackendData({ ...backendData, loading: false, error: error });
    }
  };
  useEffect(() => {
    getBackendData();
  }, []);

  const reducerFunction = (state, action) => {
    const value =
      action.type !== "SEARCH"
        ? action.inputValue.target.value
        : action.inputValue;
    switch (action.type) {
      case "PRICE":
        return { ...state, priceRange: value };
      case "SEARCH":
        return { ...state, search: value };
      case "SORT":
        return { ...state, sort: value };
      case "RATINGS":
        return { ...state, rating: value };
      case "OCCASION":
        return {
          ...state,
          ocassionFilters: state.ocassionFilters.includes(value)
            ? [...state.ocassionFilters.filter((item) => item !== value)]
            : [...state.ocassionFilters, value],
        };
      case "MATERIAL":
        return {
          ...state,
          materialFilter: state.materialFilter.includes(value)
            ? [...state.materialFilter.filter((item) => item !== value)]
            : [...state.materialFilter, value],
        };
      case "CATEGORY":
        return {
          ...state,
          categoryFilters: state.categoryFilters.includes(value)
            ? [...state.categoryFilters.filter((item) => item !== value)]
            : [...state.categoryFilters, value],
        };
      default:
        console.log("something is wrong in filters");
        break;
    }
  };

  const [filtersUsed, setFiltersUsed] = useReducer(reducerFunction, {
    priceRange: "",
    search: "",
    sort: "",
    rating: "",
    ocassionFilters: [],
    categoryFilters: [],
    materialFilter: [],
  });
  console.log(filtersUsed);
  const lowercaseSearch = filtersUsed.search.toLowerCase();

  const searchedDataValue =
    filtersUsed.search.length > 0
      ? backendData?.productsData.filter(
        (item) =>
          item.product_name.toLowerCase().includes(lowercaseSearch) ||
          item.product_material.toLowerCase().includes(lowercaseSearch) ||
          item.product_occasion.toLowerCase().includes(lowercaseSearch) ||
          item.product_brand.toLowerCase().includes(lowercaseSearch) ||
          item.product_category.toLowerCase().includes(lowercaseSearch) ||
          item.product_color.toLowerCase().includes(lowercaseSearch) ||
          item.product_isBadge.toLowerCase().includes(lowercaseSearch)
      )
      : backendData?.productsData;

  const categoryFilterData =
    filtersUsed.categoryFilters.length > 0
      ? searchedDataValue.filter((item) =>
        filtersUsed.categoryFilters.some(
          (elem) => item.product_category === elem
        )
      )
      : searchedDataValue;

  const occasionFilterData =
    filtersUsed.ocassionFilters.length > 0
      ? categoryFilterData.filter((item) =>
        filtersUsed.ocassionFilters.some(
          (elem) => item.product_occasion === elem
        )
      )
      : categoryFilterData;
  const materialFilterData =
    filtersUsed.materialFilter.length > 0
      ? occasionFilterData.filter((item) =>
        filtersUsed.materialFilter.some(
          (elem) => item.product_material === elem
        )
      )
      : occasionFilterData;

  const priceRangeData =
    filtersUsed.priceRange.length > 0
      ? materialFilterData.filter(
        (item) => item.product_price < filtersUsed.priceRange
      )
      : materialFilterData;
  const ratingFilter = filtersUsed.rating > 0 ?
    priceRangeData.filter(item => item.product_rating > filtersUsed.rating) :
    priceRangeData

  const finalPriceSortedData = filtersUsed?.sort.length > 0 && filtersUsed.sort === "LOWTOHIGH" ? ratingFilter.sort((first, second) => first.product_price - second.product_price) :
    ratingFilter.sort((first, second) => second.product_price - first.product_price)
  console.log(priceRangeData);
  return (
    <DataContext.Provider
      value={{ backendData, finalPriceSortedData, setFiltersUsed }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
