import "./Budget.css"

const Budget = () => (
    <div className="budget">
        <h4>Budgeting area</h4>
        <div className="search-bar">
            <ul>
                <li>
                    <form name="salary" id="salary" value="submit">Enter Salary</form>
                </li>
                <li>
                    <form name="savings" id="savings" value="submit">Enter Savings</form>
                </li>
                <li>
                    <form name="gutgoings" id="outgoings" value="submit">Enter Outgoings</form>
                </li>
            </ul>
            
                 
        </div>    
    </div>
)

export default Budget


