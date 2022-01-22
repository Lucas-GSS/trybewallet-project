import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class CurrencyInput extends Component {
  async componentDidMount() {
    const { dispatchFetchCurrencies } = this.props;
    await dispatchFetchCurrencies();
  }

  render() {
    const { defaultCurrency, currencies, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          data-testid="currency-input"
          onChange={ handleChange }
          defaultValue={ defaultCurrency }
        >
          {
            currencies.map(
              (symbol) => <option key={ symbol } value={ symbol }>{ symbol }</option>,
            )
          }
        </select>
      </label>
    );
  }
}

CurrencyInput.propTypes = {
  defaultCurrency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  dispatchFetchCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchCurrencies: (currencySymbols) => dispatch(
    fetchCurrencies(currencySymbols),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInput);
