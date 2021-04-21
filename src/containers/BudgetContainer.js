import React, { useState } from 'react';
import BudgetForm from '../components/Budget';
import BudgetDisplay from '../components/BudgetDisplay'

function BudgetContainer() {
  const [maxAmount, setMaxAmount] = useState();

  const handleSubmit = (budgetData) => {
    const monthlySalary = budgetData.salary / 12;
    const money_needed = budgetData.holiday - budgetData.savings;
    const excess = monthlySalary - budgetData.outgoings;
    const departureMonths = money_needed/excess;

    setMaxAmount(departureMonths);
  }

  return (
    <>
      <h1>Budget Calculator</h1>
      <BudgetForm onSubmit={handleSubmit}/>
      <BudgetDisplay maxAmount={maxAmount}/>
    </>
  );
}

export default BudgetContainer;