import { createAction, createReducer, on } from "@ngrx/store";
import * as AppState from "../../state/app.state";
import { User } from "../user";

export interface state extends AppState.State {
  users: UserState;
}

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
  users: User[];
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null,
  users: null
}

export const userReducer = createReducer<UserState>(
  initialState,
 on(createAction('[User] Mask User Name'), (state): UserState => {
   console.log('User masked changed :' + JSON.stringify(state));
  return {
    ...state,
    maskUserName: !state.maskUserName
  };
 })
);
