import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import Login from './components/Login/Login';
import Teste from './components/Login/Teste';
import NewExpense from './components/NewExpense/NewExpense';
import Context from './components/Context/Context';

import Routers from './router';
import Counter from './components/Context/Counter';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
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
function App() {
  const [total, setTotal] = useState('Nome');
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }
  /* return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Lets's get started"),
    React.createElement(expenses, { items: expenses })
  ); */

  return (
    /* <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div> */

    < Context.Provider value={[total, setTotal]} >
      <div>
        <p>App.js: {total}</p>
        <p> Conunter.js :  <Counter /></p>

      </div>
    </Context.Provider >
    /* < div >
      <Login />
      <Teste />
    </div > */
  );
}

export default App;
