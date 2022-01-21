export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const playerLogin = (payload) => ({ type: PLAYER_LOGIN, payload });

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
const receiveCurrencies = (payload) => ({ type: RECEIVE_CURRENCIES, payload });

export const fetchCurrencies = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencyDatas) => dispatch(receiveCurrencies(currencyDatas)));
};

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const addExpense = (expense, exchangeRates) => (
  { type: ADD_EXPENSE, payload: { ...expense, exchangeRates } }
);

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, id });
