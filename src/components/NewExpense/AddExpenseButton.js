const AddExpense = (props) => {
  const submitHandler = () => {
    props.onAddNewExpense(true);
  }
  return (
    <form onSubmit={submitHandler}>
      <button type="submit">Add new expense</button>
    </form>
  );
};

export default AddExpense;
