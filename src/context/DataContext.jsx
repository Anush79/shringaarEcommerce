import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { reducerFilterFunction } from "../allReducers/filtersReducer";
import {
  getProduct,
  getAllProducts,
} from "../services/shopingService/shopService";
import { getAllCategories } from "../services/shopingService/categoryService";

export const DataContext = createContext();
export function DataProvider({ children }) {
  const [backendData, setBackendData] = useState({
    loading: true,
    error: null,
    productsData: [],
  });
  const [categoriesData, setCategoriesData] = useState([]);
  const [singleProduct, setSingleProduct] = useState({
    product: {},
    loading: true,
  });

  const getBackendData = async () => {
    try {
      const response = await getAllProducts();
      setBackendData({
        ...backendData,
        loading: false,
        productsData: [...response?.data?.products],
      });
    } catch (error) {
      setBackendData({ ...backendData, loading: false, error: error });
    }
  };

  const getSingleProduct = async (id) => {
    setSingleProduct({
      ...singleProduct,
      loading: true,
    });
    try {
      const response = await getProduct(id);
      const {
        status,
        data: { product: productDB },
      } = response;
      if (status === 200)
        setSingleProduct({
          product: productDB,
          loading: false,
        });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await getAllCategories();
      const {
        status,
        data: { categories },
      } = response;
      if (status === 200) setCategoriesData(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBackendData();
    getCategories();
  }, []);

  const [filtersUsed, setFiltersUsed] = useReducer(reducerFilterFunction, {
    priceRange: 1500,
    search: "",
    sort: "",
    rating: "",
    ocassionFilters: [],
    categoryFilters: [],
    materialFilter: [],
  });

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
  const ratingFilter =
    filtersUsed.rating > 0
      ? priceRangeData.filter(
          (item) => item.product_rating > filtersUsed.rating
        )
      : priceRangeData;
  const finalPriceSortedData =
    filtersUsed?.sort.length > 0 && filtersUsed.sort === "LOWTOHIGH"
      ? ratingFilter.sort(
          (first, second) => first.product_price - second.product_price
        )
      : ratingFilter.sort(
          (first, second) => second.product_price - first.product_price
        );
  return (
    <DataContext.Provider
      value={{
        backendData,
        finalPriceSortedData,
        productCount: finalPriceSortedData.length,
        setFiltersUsed,
        categoriesData,
        getSingleProduct,
        singleProduct,
        filtersUsed,
        setBackendData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  return useContext(DataContext);
};
