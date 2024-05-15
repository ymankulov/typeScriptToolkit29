import axios from "axios";
import { getProduct } from "./ProductSlice";
import { AppDispatch } from "..";
import { IProduct } from "../../types/Iproduct";
export const getProducts = () => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get<IProduct[]>(
      `https://fakestoreapi.com/products`
    );
    dispatch(getProduct(res.data));
  } catch (e: any) {
    console.log(e.mess);
  }
};
