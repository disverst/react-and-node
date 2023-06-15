import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function User() {
  const { person } = useContext(UserContext);
  return (
    <>
      {person && (
        <>
          <h1>
            {person.name} {person.lastName}
          </h1>
          <h2>{person.isInstructor ? 'Instructor' : 'Student'}</h2>
        </>
      )}
    </>
  );
}
