import React, { useState } from 'react';

import AddingErrorModel from './AddingErrorModel';
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:"Invaid input",
        age:"please enter the proper age"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:"invalid age",
        age:" please enter the  valid age > 0"
      })
      return;
    }
    props.ondata(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

const buttonHandler=()=>{
  setError(null);
}


  return (
    <div className="new">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <button type="submit">Add User</button>
      </form>
     {error && <AddingErrorModel title={error.title}  age={error.age} 
     onsend={buttonHandler}/>}
    </div>
  );
};

export default AddUser;