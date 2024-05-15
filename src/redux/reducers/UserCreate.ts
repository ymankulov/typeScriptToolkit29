import { IUser } from './../../types/IUser';
import axios from "axios";
import { AppDispatch } from "..";
import { showUser } from "./UserSlice";

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
    dispatch(showUser(res.data));
  } catch (e: any) {
    dispatch(e.message);
  }
};
