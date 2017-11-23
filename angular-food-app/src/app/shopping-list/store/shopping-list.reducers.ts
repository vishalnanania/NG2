import {Ingredient} from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export interface AppState {
  shoppingList: State
}

export function shoppingListReducer(state= initialState, action: ShoppingListActions
  .ShoppingListActions){
    switch(action.type) {
      case ShoppingListActions.ADD_INGREDIENT:
        return{
          ...state,
          ingredients: [...state.ingredients, action.payload]
        };
      case ShoppingListActions.ADD_INGREDIENTS:
        return{
          ...state,
          ingredients: [...state.ingredients, ...action.payload]
        };
      case ShoppingListActions.UPDATE_INGREDIENT:
        const updatedIngredients = [...state.ingredients];
        updatedIngredients[state.editedIngredientIndex] = action.payload.ingredient;
        return{
          ...state,
          ingredients: updatedIngredients,
          editedIngredient: null,
          editedIngredientIndex: -1
        };
      case ShoppingListActions.DELETE_INGREDIENT:
        const deletedIngredients = [...state.ingredients];
        deletedIngredients.splice(action.payload.index, 1);
        return{
          ...state,
          ingredients: deletedIngredients,
          editedIngredient: null,
          editedIngredientIndex: -1
        };
      case ShoppingListActions.START_EDIT:
        return{
          ...state,
          ingredients: [...state.ingredients],
          editedIngredient: state.ingredients[action.payload.index],
          editedIngredientIndex: action.payload.index,
        };
      case ShoppingListActions.STOP_EDIT:
        return{
          ...state,
          ingredients: [...state.ingredients],
          editedIngredient: null,
          editedIngredientIndex: -1,
        };
      default:
        return state;
    }
}
