import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootReducer } from "../redux";

export const useAppSelector: TypedUseSelectorHook<rootReducer> = useSelector;
