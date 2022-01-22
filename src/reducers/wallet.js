import { ADD_EXPENSE, DELETE_EXPENSE, RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return ({
      ...state,
      currencies: Object.keys(action.payload).filter((symbol) => symbol !== 'USDT'),
    });
  case ADD_EXPENSE:
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  case DELETE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    });
  default:
    return state;
  }
};

export default wallet;
