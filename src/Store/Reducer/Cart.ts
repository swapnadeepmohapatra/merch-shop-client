import ActionTypes from "../Action/ActionTypes";

const initialState = {
  products: null
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_CART:
      return {
        ...state,
        products: action.products
      };
    case ActionTypes.CLEAR_CART: {
      return {
        ...initialState
      };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;
