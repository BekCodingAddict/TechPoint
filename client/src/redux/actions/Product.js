import {
  setLoading,
  setLoading,
  setError,
  setPagination,
  setProducts,
} from "../slices/product";
import axios from "axios";

export const getProducts = (page, favoriteToggle) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const { products, pagination } = data;
    dispatch(setProducts(products));
    dispatch(setPagination(pagination));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Unexpected error has occured.Please try again later!"
      )
    );
  }
};
