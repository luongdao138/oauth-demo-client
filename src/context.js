import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const context = React.createContext();
const rootUrl = 'https://oauth-passport-demo.herokuapp.com';

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`${rootUrl}/getuser`, { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <context.Provider value={{ user }}>{children}</context.Provider>;
};

const useGlobalContext = () => {
  return useContext(context);
};

export { AppProvider, useGlobalContext };
