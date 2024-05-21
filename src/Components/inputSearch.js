import { BiSearch } from "react-icons/bi";

export const InputSearch = () => {
  return (
    <div className="border-b-2 rounded-md w-full h-9 relative">
      <input
        type="text"
        className="text-white bg-transparent outline-none w-full h-full text-center text-sm tracking-wider"
      />
      <BiSearch color="white" className="absolute top-3 right-2" />
    </div>
  );
};
