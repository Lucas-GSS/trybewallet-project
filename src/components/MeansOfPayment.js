import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MeansOfPayment extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        {' '}
        <select
          id="method"
          data-testid="method-input"
          defaultValue={ method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

MeansOfPayment.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MeansOfPayment;
