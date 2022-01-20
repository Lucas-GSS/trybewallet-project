import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <label htmlFor="description">
        Descrição:
        {' '}
        <input
          type="text"
          id="description"
          data-testid="description-input"
          value={ description }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
