import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditButton extends Component {
  render() {
    const { handleEdit } = this.props;
    return (
      <button type="button" onClick={ handleEdit }>
        Editar despesa
      </button>
    );
  }
}

EditButton.propTypes = {
  handleEdit: PropTypes.func.isRequired,
};

export default EditButton;
