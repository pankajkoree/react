import { fetchProductsError } from "../slices/productSlice";

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const BASE_URL = "https://dummyjson.com";

    if (action.type === "api/makeCall") {
      next(action);
      const { url, onStart, onSuccess, onError } = action.payload;
      dispatch({
        type: onStart,
      });
      const fetchProducts = async () => {
        try {
          const response = await fetch(`${BASE_URL}/${url}`);
          const data = await response.json();
          dispatch({ type: onSuccess, payload: data });
        } catch (err) {
          dispatch(
            onError({
              type: onError,
            })
          );
          console.error("Error fetching products:", err);
        }
      };

      fetchProducts();
    } else {
      next(action);
    }
  };
