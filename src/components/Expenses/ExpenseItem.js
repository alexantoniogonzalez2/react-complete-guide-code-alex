//import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = props => {

  // 3. These are constant because title only changes when the instance is reevaluated.
  //const [title, setTitle] = useState(props.title); // 4. Only the first time is used the value of props.title,
  // then is used the real state, whatever was set by setTitle.
  // console.log('ExpenseItem evaluated by React'); 2. this appears 4 times the first
  // time as the 4 instances are rendered, but just once after a

  // const clickHandler = () => {
  //   setTitle('Updated');
  //   // console.log(title); 1. At this point still the old value. 
  //   // this function does not update the component itself, it is scheduled.
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
