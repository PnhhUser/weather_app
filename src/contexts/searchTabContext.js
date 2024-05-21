import { createContext, useContext, useEffect, useState } from "react";

const SearchTabContext = createContext(null);

const KEY = "ANL4GVCW3HE4EL27CCVZVDQ5V";
const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const POSITION_DEFAULT = "Da nang, viet nam";

export function useSearchTab() {
  return useContext(SearchTabContext);
}

export const SearchTabProvider = ({ children }) => {
  const [isOpenSearchTab, setIsOpenSearchTab] = useState(false);
  const [dataWeather, setDataWeather] = useState([]);

  useEffect(() => {
    fetch(`${URL}${POSITION_DEFAULT}?key=${KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setDataWeather(data);
      });
  }, []);

  return (
    <SearchTabContext.Provider
      value={{ isOpenSearchTab, setIsOpenSearchTab, dataWeather }}
    >
      {children}
    </SearchTabContext.Provider>
  );
};
