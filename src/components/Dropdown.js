import { FiSearch } from 'react-icons/fi';

const Dropdown = ({ year, handleChange, yearLoop, handleSubmit }) => {
  return (
    <>
      <form className="bg-slate-400 hover:bg-slate-500 w-fit mx-auto px-4 py-2 flex gap-4 rounded-full">
        <select value={year} onChange={handleChange} className="bg-white rounded-full px-2 text-center text-xs sm:text-sm md:text-base">
          {yearLoop().map((item, index) => {
            return (
              <option className="text-center text-xs sm:text-sm md:text-base" key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button className=" text-white font-semibold flex justify-center items-center gap-2 text-center text-xs sm:text-sm md:text-base" type="submit" onClick={handleSubmit}>
          Search By Year <FiSearch />
        </button>
      </form>
    </>
  );
};

export default Dropdown;
