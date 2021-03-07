import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppReducer } from "../Redux/redux-store";


export  type ThunkType = ThunkAction<Promise<void>, AppReducer, unknown, Action<string>>
export type ThunkDispatchType = ThunkDispatch<unknown, unknown, Action<string>>