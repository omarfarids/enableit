import React, { createContext, useState, useEffect } from "react";

type ContextProps = {
  counter: number;
  setCounter: (count: number) => void;
  increment: () => void;
  decrement: () => void;
  data: any[];
};

const AppContext = createContext<Partial<ContextProps>>({});

const AppProvider = ({ children }: any) => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  let url = `https://give-me-users-forever.vercel.app/api/users/${counter}/next`;

  const fetchAPI = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setData(json.users);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setData([]);
    fetchAPI();
  }, [counter]);
  return (
    <AppContext.Provider
      value={{ counter, setCounter, data, decrement, increment }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
