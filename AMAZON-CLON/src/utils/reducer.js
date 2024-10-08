// InitialState
import { Rating } from "@mui/material";
import { Type } from "./action.type";
export const initialState = {
  basket: [],
  user: null,
};

// Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    // ADD_TO_BASKET Case
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state, //Copies all properties of the state into the new object and...state represent's basket:[](the privous state)
          basket: [...state.basket, { ...action.item, amount: 1 }], // Here we are adding amount:1 to the item:{amount:1}
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }
    // REMOVE_FROM_BASKET Case
    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (index >= 0) {
        // This should be >= 0 to check if the item exists
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1); // Remove the item if the amount is 1
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    //EMPTY_BASKET case
    case Type.EMPTY_BASKET:
      return{
        ...state,
        basket:[]
      }
    // SET_USER Case
    case Type.SET_USER:
      return {
        ...state,
        user: action.user, // action.user:-indicate the user inside the Auth.jsx( user: userInfo.user)
      };

    default:
      return state;
  }
};
