import React, { useState } from 'react';
import BudgetForm from '../components/Budget';
import BudgetDisplay from '../components/BudgetDisplay'

function BudgetContainer() {
  const [maxAmount, setMaxAmount] = useState();
  const [maxExcess, setMaxExcess] = useState();

  const handleSubmit = (budgetData) => {
    const monthlySalary = budgetData.salary / 12;
    const tax = (20 / 100) * monthlySalary;
    const income = monthlySalary - tax;
    const money_needed = budgetData.holiday - budgetData.savings;
    const excess = income - budgetData.outgoings;
    const departureMonths = money_needed/excess;

    setMaxAmount(departureMonths.toFixed(1));
    setMaxExcess(Math.round(excess))
  }

  return (
    <>
      <h1>Budget Calculator</h1>
      <BudgetForm onSubmit={handleSubmit}/>
      <BudgetDisplay maxAmount={maxAmount} maxExcess={maxExcess}/>
    </>
  );
}

export default BudgetContainer;