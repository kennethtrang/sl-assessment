import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
} from '../actions/getItem';

const initialState = {
  details: {},
  salesGraphData: {
    dates: [],
    retailSales: [],
    wholesaleSales: [],
  },
  isLoading: false,
  errorMessage: null,
};

const selectedItem = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ITEM_SUCCESS:
      const { item } = action.payload;
      const dates = [];
      const retailSales = [];
      const wholesaleSales = [];

      item.sales.forEach((sale) => {
        dates.push(sale.weekEnding);
        retailSales.push(sale.retailSales);
        wholesaleSales.push(sale.wholesaleSales);
      });

      return {
        details: action.payload.item,
        salesGraphData: {
          ...state.salesGraphData,
          dates,
          retailSales,
          wholesaleSales,
        },
        isLoading: false,
      };
    case GET_ITEM_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default selectedItem;
