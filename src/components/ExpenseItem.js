import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({ expenseItem }) => {
    // [nameOfState, functionToUpdateState]
    const [tasks, setTasks] = useState(); // put state data between parentheses

    const clickHandler = () => {
        alert('click!');
    }


    return (
        <div className='expense-item'>


            <ExpenseDate expenseDate={expenseItem.date} />
            <div className='expense-item__description'>
                <h2>{expenseItem.title}</h2>
                <div className='expense-item__price'>${expenseItem.amount}</div>
            </div>
            <button onClick={clickHandler}>Button</button>

        </div>
    )
}

export default ExpenseItem
