import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import CurrencyInput from './CurrencyInput';
import DescriptionInput from './DescriptionInput';
import ValueInput from './ValueInput';
import MeansOfPayment from './MeansOfPayment';
import TagInput from './TagInput';
import AddExpenseButton from './AddExpenseButton';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async getExchangeRates() {
    const getCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await getCurrencies.json();
    const exchangeRates = await json;
    return exchangeRates;
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { id } = this.state;
    const { dispatchExpense } = this.props;
    dispatchExpense(this.state, await this.getExchangeRates());
    this.setState({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { currency, value, description, method, tag } = this.state;
    return (
      <form>
        <ValueInput value={ value } handleChange={ this.handleChange } />
        <DescriptionInput
          description={ description }
          handleChange={ this.handleChange }
        />
        <CurrencyInput
          handleChange={ this.handleChange }
          defaultCurrency={ currency }
        />
        <MeansOfPayment handleChange={ this.handleChange } method={ method } />
        <TagInput tag={ tag } handleChange={ this.handleChange } />
        <AddExpenseButton handleClick={ this.handleClick } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (state, exchangeRates) => dispatch(addExpense(state, exchangeRates)),
});

ExpenseForm.propTypes = {
  dispatchExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
