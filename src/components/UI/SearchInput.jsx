import { RiSearchLine } from "react-icons/ri";

const SearchInput = () => {
  return (
    <div className="flex items-center bg-custom-datepicker p-2 rounded-lg shadow-sm w-80 ml-2">
      <RiSearchLine size={24} className="text-custom-grey ml-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none pl-4 text-custom-grey w-full"
      />
    </div>
  );
};

export default SearchInput;
