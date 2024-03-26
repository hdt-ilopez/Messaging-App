import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-borded rounded-lg"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch size={20} />
      </button>
    </form>
  );
};

export default SearchInput;
