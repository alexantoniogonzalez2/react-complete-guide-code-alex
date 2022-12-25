import {useState} from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';
import AddExpenseButton from './AddExpenseButton';
const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  // just passing the reference to the child component, not executing the function
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  }
  const displayExpenseFormHandler = (showForm) => {
    setDisplayForm(showForm);
  }

  return (
    <div className="new-expense">
      {!displayForm && <AddExpenseButton onAddNewExpense={displayExpenseFormHandler}/>}
      {displayForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={displayExpenseFormHandler}/>} 
    </div>
  );
  
  
 
};

export default NewExpense;
