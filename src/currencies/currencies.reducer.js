import { CURRENCIES_RECEIVED } from './currencies.actions';
const initialState = {
  currencies: [],
};
const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCIES_RECEIVED: {
      return {
        currencies: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currenciesReducer;
