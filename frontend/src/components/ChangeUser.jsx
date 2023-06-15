import React, { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function ChangeUser() {
  const { setPerson } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  const handleChangeUser = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      name: newName,
      isInstructor: !prevPerson.isInstructor,
    }));
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={newName}
          className="input-field"
          onChange={handleInputChange}
        />
      </div>
      <div className="button-container">
        <button onClick={handleChangeUser}>Change User</button>
      </div>
    </>
  );
}
