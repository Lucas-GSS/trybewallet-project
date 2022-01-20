export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const playerLogin = (payload) => ({ type: PLAYER_LOGIN, payload });

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
const receiveCurrencies = (payload) => ({ type: RECEIVE_CURRENCIES, payload });

export const fetchCurrencies = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencyDatas) => dispatch(receiveCurrencies(currencyDatas)));
};
