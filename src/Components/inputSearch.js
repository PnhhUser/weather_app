import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useWeather } from "../contexts/weatherContext";

export const InputSearch = () => {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const { setResutlSearch } = useWeather();

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleEnter = async (e) => {
    if (e.keyCode === 13) {
      searchRef.current.value = "";

      setResutlSearch(search);
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
    </div>
  );
};
