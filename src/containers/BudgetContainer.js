import React, { useState } from 'react';
import BudgetForm from '../components/Budget';
// import MortgageDisplay from '../components/MortgageDisplay';

function BudgetContainer() {
  const [maxAmount, setMaxAmount] = useState();

  const handleSubmit = (data) => {
    const yearlyCommittments = data.other * 12;
    const yearlySalaries = (data.salary1 + data.salary2) - yearlyCommittments;
    const max = data.deposit + (yearlySalaries * 3);
    setMaxAmount(max);
  }

  return (
    <>
      <h1>Budget Calculator</h1>
      <BudgetForm onSubmit={handleSubmit} />
      {/* <MortgageDisplay maxAmount={maxAmount} /> */}
    </>
  );
}

export default BudgetContainer;