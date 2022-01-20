import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValueInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="value">
        Valor:
        {' '}
        <input
          type="number"
          id="value"
          data-testid="value-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ValueInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ValueInput;
