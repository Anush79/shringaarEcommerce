export const reducerFilterFunction = (state, action) => {

  const value=action.inputValue;

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
    case "CLEARFILTER":
      return {
        priceRange: 1500,
        search: "",
        sort: "",
        rating: "",
        ocassionFilters: [],
        categoryFilters: [],
        materialFilter: [],
      };

    default:
      console.log("something is wrong in filters");
      break;
  }
};
