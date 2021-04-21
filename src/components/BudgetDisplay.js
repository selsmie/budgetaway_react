import React from 'react';
import BudgetForm from './Budget';

const BudgetDisplay = ({ maxAmount }) => {
  if (!maxAmount) {
    return null;
  }

  return (
    <>
      <p>You can go on holiday in {maxAmount} months.</p>
    </>
  );
};

export default BudgetDisplay;
