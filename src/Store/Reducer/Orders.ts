import ActionTypes from "../Action/ActionTypes";

const initialState = {
  success: false,
  purchaseCompleted: false,
  products: [],
  historyProducts: []
};

const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.PURCHASE:
      return {
        ...state,
        purchaseCompleted: true,
        success: action.success,
        products: [...action.products]
      };
    case ActionTypes.GET_ORDERS:
      return {
        ...state,
        historyProducts: action.products
      };

    default:
      return { ...state };
  }
};

export default ordersReducer;
