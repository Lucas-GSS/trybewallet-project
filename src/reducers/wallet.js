import {
  ADD_EDITED_EXPENSE,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  idExpenseEdit: 0,
  isEditing: false,
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
  case EDIT_EXPENSE:
    return ({
      ...state,
      idExpenseEdit: Number(action.expenseId),
      isEditing: true,
    });
  case ADD_EDITED_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.map((obj) => {
        if (obj.id === state.idExpenseEdit) return { ...obj, ...action.payload };
        return obj;
      }),
    });
  default:
    return state;
  }
};

export default wallet;
