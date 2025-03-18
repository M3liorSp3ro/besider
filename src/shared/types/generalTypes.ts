import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type CustomThunkDispatch<ActionType extends Action> = ThunkDispatch<
  unknown,
  unknown,
  ActionType
>;
