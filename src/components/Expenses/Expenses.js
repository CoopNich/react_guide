import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const onChangeFilterHandler = selectedDate => {
        setFilteredYear(selectedDate)
    }

    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilterHandler={onChangeFilterHandler}/>
        {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
        </div>
    )
}

export default Expenses;