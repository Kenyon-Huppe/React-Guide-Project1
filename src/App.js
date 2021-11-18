import ExpenseItem from "./components/ExpenseItem";
import './App.css'
import NewExpense from "./components/NewExpense";
import Expenses from './components/Expenses'
import { useState } from "react";
import ExpenseFilter from './components/ExpenseFilter'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  const [expenseDataArray, setExpenseDataArray] = useState([...expenses]);

  const addExpenseHandler = (expense) => {
    setExpenseDataArray([...expenseDataArray, expense]);
    console.log('here ' + expenseDataArray)
  }

  return (
    <div className='container'>
      {/* form */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* bar graph */}
      <div className='expenses expense-wrap'>
        <Expenses onExpenseDataArray={expenseDataArray} />
      </div>
      {/* list */}
      <div className='expenses expense-wrap'>
        <ExpenseFilter />

        {expenses.map((expenseItem) => (
          <ExpenseItem key={expenseItem.id} expenseItem={expenseItem}></ExpenseItem>
        ))}
      </div>

      {/* <ExpenseItem title={expenses[0].title} amount={expenses}></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}
    </div>
  );
}

export default App;
