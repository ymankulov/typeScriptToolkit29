import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";

interface IUserState {
  user: IUser[];
}

const initialState: IUserState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showUser(state, action) {
      state.user = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { showUser } = userSlice.actions;
