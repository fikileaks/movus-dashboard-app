const Header = ({ loading, error, dataMakerId, BrandName }) => {
  const color = ['bg-red-200', 'bg-orange-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100', 'bg-teal-100', 'bg-gray-100'];
  return (
    <div className="py-4 ">
      <h1 className="text-center font-bold text-sm">Car Dashboard Counter</h1>
      <div className="flex flex-wrap justify-center gap-2 p-4 mx-auto border-[1px] border-violet-100 rounded-lg shadow-sm  w-fit">
        {!loading &&
          !error &&
          dataMakerId.map(({ Make_ID, Make_Name }) => {
            for (let i = 0; i < BrandName.length; i++) {
              if (Make_Name === BrandName[i]) {
                return (
                  <div className={`px-1 rounded-md text-xs sm:text-sm md:text-base font-medium text-slate-900 ${color[i]}`} key={Make_ID}>
                    {Make_Name}
                    {Make_ID}
                  </div>
                );
              }
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default Header;
