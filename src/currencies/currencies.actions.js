import { fetchCurrenciesList } from './currenciesGateway';

export const CURRENCIES_RECEIVED = 'CURRENCIES_RECEIVED';

export const currenciesReceived = currenciesList => ({
  type: CURRENCIES_RECEIVED,
  payload: currenciesList,
});

export const getCurrenciesList = () => {
  const thunkAction = dispatch => {
    fetchCurrenciesList().then(currenciesList => dispatch(currenciesReceived(currenciesList)));
  };
  return thunkAction;
};
