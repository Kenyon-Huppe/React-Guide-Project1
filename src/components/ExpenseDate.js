import './ExpenseDate.css'
const ExpenseDate = ({ expenseDate }) => {
    const month = expenseDate.toLocaleString('en-US', { month: 'long' });
    const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
    const year = expenseDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month date month'>{month}</div>
            <div className='expense-date__day date year'>{year}</div>
            <div className='expense-date__year date day'>{day}</div>
        </div>
    )
}

export default ExpenseDate
