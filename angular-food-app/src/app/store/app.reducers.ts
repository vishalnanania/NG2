import { ActionReducerMap } from "@ngrx/store";
import * as AuthReducers from "../auth/store/auth.reducers";
import * as ShoppingListReducers from "../shopping-list/store/shopping-list.reducers";


export interface AppState {
  shoppingList: ShoppingListReducers.State
  auth: AuthReducers.State
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: ShoppingListReducers.shoppingListReducer,
  auth: AuthReducers.authReducer
};
