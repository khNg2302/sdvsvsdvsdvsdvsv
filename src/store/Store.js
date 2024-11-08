import { createContext, useCallback, useState } from "react";

export const StoreContext = createContext({
  currentFloat: "",
});

export const StoreProvider = ({ children }) => {
  const [currentFloat, setCurrentFloat] = useState([]);

  const addMoreFloat = useCallback(
    (floatName) => {
      setCurrentFloat([...currentFloat, floatName]);
    },
    [currentFloat]
  );

  const setNewFloat = useCallback((floatName) => {
    const newCurrentFloat = [floatName];
    setCurrentFloat([...newCurrentFloat]);
  }, []);

  const closeFloat = useCallback(
    (floatName) => {
      setCurrentFloat([...currentFloat.filter((name) => name !== floatName)]);
    },
    [currentFloat]
  );

  return (
    <StoreContext.Provider
      value={{
        currentFloat,
        setCurrentFloat,
        addMoreFloat,
        setNewFloat,
        closeFloat,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
