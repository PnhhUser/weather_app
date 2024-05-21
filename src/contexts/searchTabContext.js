import { createContext, useContext, useState } from "react";

const SearchTabContext = createContext(null);

export function useSearchTab() {
  return useContext(SearchTabContext);
}

export const SearchTabProvider = ({ children }) => {
  const [isOpenSearchTab, setIsOpenSearchTab] = useState(false);

  return (
    <SearchTabContext.Provider value={{ isOpenSearchTab, setIsOpenSearchTab }}>
      {children}
    </SearchTabContext.Provider>
  );
};
