import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    return expenses.reduce((accumulator, expense) => {
      accumulator += (
        expense.value * expense.exchangeRates[expense.currency].ask
      );
      return accumulator;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <span>
          E-mail:
          {' '}
          <span data-testid="email-field">{ email }</span>
          {' '}
        </span>
        <span>
          Total:
          {' '}
          <span data-testid="total-field">{ this.sumExpenses().toFixed(2) }</span>
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
