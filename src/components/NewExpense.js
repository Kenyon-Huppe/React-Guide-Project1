import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enteredExpenceData) => {
        const expenseData = {
            ...enteredExpenceData,
            id: Date.now().toString(), // gets current time to create individual id
        }
        // when passed in function is called is when data is passed up
        onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {/* on saving of expense data, make Expense Form point to save expense data handler (allow access) */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
