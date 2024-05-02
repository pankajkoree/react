import { useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);
  const updateLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };
  return [data, updateLocalStorage];
}

useLocalStorage.propTypes = {};
