import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext(null);

const KEY = "ANL4GVCW3HE4EL27CCVZVDQ5V";
const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const POSITION_DEFAULT = "Da nang, viet nam";

export function useWeather() {
  return useContext(WeatherContext);
}

export const WeatherProvider = ({ children }) => {
  const [dataWeather, setDataWeather] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [resultSearch, setResutlSearch] = useState(POSITION_DEFAULT);

  useEffect(() => {
    let isSubscribed = true;

    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();

      if (isSubscribed) {
        setDataWeather(data);
        setIsLoadingData(false);
      }
    }

    fetchData(`${URL}${resultSearch}?key=${KEY}`);

    return () => {
      isSubscribed = false;
      setIsLoadingData(true);
    };
  }, [resultSearch]);

  return (
    <WeatherContext.Provider
      value={{ dataWeather, isLoadingData, setResutlSearch }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
