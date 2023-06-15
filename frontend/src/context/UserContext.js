import { createContext } from 'react';

const UserContext = createContext({
  name: '',
  setPerson: () => {},
});

export default UserContext;
