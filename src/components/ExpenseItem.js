import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({ expenseItem }) => {



    return (
        <div className='expense-item'>


            <ExpenseDate expenseDate={expenseItem.date} />
            <div className='expense-item__description'>
                <h2>{expenseItem.title}</h2>
                <div className='expense-item__price'>${expenseItem.amount}</div>
            </div>

        </div>
    )
}

export default ExpenseItem
