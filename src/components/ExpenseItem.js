import './ExpenseItem.css'

const ExpenseItem = ({ expenseItem }) => {
    const month = expenseItem.date.toLocaleString('en-US', { month: 'long' });
    const day = expenseItem.date.toLocaleString('en-US', { day: '2-digit' });
    const year = expenseItem.date.getFullYear();


    return (
        <div className='expense-item'>


            <div>
                <div className='date month'>{month}</div>
                <div className='date day'>{day}</div>
                <div className='date year'>{year}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{expenseItem.title}</h2>
                <div className='expense-item__price'>$ {expenseItem.amount}</div>
            </div>

        </div>
    )
}

export default ExpenseItem
