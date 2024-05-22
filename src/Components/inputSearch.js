import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useWeather } from "../contexts/weatherContext";
import { sleep } from "../utils";

export const InputSearch = () => {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const { setResutlSearch } = useWeather();
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleEnter = async (e) => {
    if (e.keyCode === 13) {
      setIsLoadingSearch(true);
      searchRef.current.value = "";

      await sleep(3000);
      setResutlSearch(search);
      setIsLoadingSearch(false);
    }
  };

  return (
    <div className="w-full">
      <div className="border-b-2 rounded-md w-full h-9 relative">
        <input
          ref={searchRef}
          type="text"
          className="text-white bg-transparent outline-none w-full h-full text-center text-sm tracking-wider"
          onChange={handleSearch}
          onKeyDown={handleEnter}
        />
        <BiSearch color="white" className="absolute top-3 right-2" />
      </div>
      <div className="h-80 flex justify-center items-center">
        {isLoadingSearch && (
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};
