import "./Budget.css"

import React, { useState } from 'react';

function BudgetForm({ onSubmit }) {
  const [budgetData, setBudgetData] = useState({
    salary: '',
    savings: '',
    outgoings: '',
  });

  const handleChange = (event) => {
    const newState = {...budgetData};
    newState[event.target.name] = parseInt(event.target.value);
    setBudgetData(newState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(budgetData);
  }

    return(
      <>
        <form>
            <div className="budget-form">
                <h4>Create your budget</h4>
                <div className="search-bar">
                    <label id="salary">Your salary:</label>
                    <input
                    onChange={handleChange}
                    min="0"
                    step="1000"
                    name="salary"
                    id="salary"
                    type="number"
                    value={budgetData.salary} />
                </div>

                <div className="search-bar">
                    <label id="savings">Your savings:</label>
                    <input
                    onChange={handleChange}
                    min="0"
                    step="100"
                    type="number"
                    id="savings"
                    name="savings"
                    value={budgetData.savings} />
                </div>

                <div className="search-bar">
                    <label id="outgoings">Outgoings p/m:</label>
                    <input
                    onChange={handleChange}
                    min="0"
                    step="100"
                    type="number"
                    id="outgoings"
                    name="outgoings"
                    value={budgetData.outgoings} />
                </div>

                <div className="search-bar">
                  <label id="holiday">Holiday Cost:</label>
                  <input
                  onChange={handleChange}
                  min="0"
                  step="500"
                  type="number"
                  id="holiday"
                  name="holiday"
                  value={budgetData.holiday} />
                </div>

                <input id="submit" onClick={handleSubmit} type="submit" value="Submit" />
                    
             </div>
        </form>
      </>
    )
    
}
export default BudgetForm;
