import React from 'react';
import "./BudgetDisplay.css";

const BudgetDisplay = ({ maxAmount, maxExcess }) => {
  if (!maxAmount) {
    return null;
  }

  return (
    <>
      <p className="budget-display">If you save {maxExcess} per month, you can go on holiday in {maxAmount} months.</p>
    </>
  );
};

export default BudgetDisplay;
