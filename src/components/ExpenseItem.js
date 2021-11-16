import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({ expenseItem }) => {
    // [nameOfState, functionToUpdateState]
    // put state data between parentheses
    const [title, setTitle] = useState(expenseItem.title);

    const clickHandler = () => {
        setTitle('Updated');
    }


    return (
        <div className='expense-item'>


            <ExpenseDate expenseDate={expenseItem.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseItem.amount}</div>
            </div>
            <button onClick={clickHandler}>Button</button>

        </div>
    )
}

export default ExpenseItem
