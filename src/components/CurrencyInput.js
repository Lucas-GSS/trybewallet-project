import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CurrencyInput extends Component {
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
            Object.keys(currencies).filter((currency) => currency !== 'USDT')
              .map(
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
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(CurrencyInput);
