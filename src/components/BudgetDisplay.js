import React from 'react';
import BudgetForm from './Budget';

const BudgetDisplay = ({ maxAmount, maxExcess }) => {
  if (!maxAmount) {
    return null;
  }

  return (
    <>
      <p>If you save {maxExcess} per month, you can go on holiday in {maxAmount} months.</p>
    </>
  );
};

export default BudgetDisplay;
