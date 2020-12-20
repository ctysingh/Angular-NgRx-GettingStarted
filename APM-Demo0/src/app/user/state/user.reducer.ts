import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from "../../state/app.state";
import * as UserActions from "./user.Actions";
import { User } from "../user";

export interface State extends AppState.State {
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

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const showMaskUsername = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, (state): UserState => {
   console.log('User masked changed :' + JSON.stringify(state));
  return {
    ...state,
    maskUserName: !state.maskUserName
  };
 })
);
