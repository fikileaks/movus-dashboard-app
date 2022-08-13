const Header = ({ loading = false, error = false, dataMakerId = [], BrandName = [] }) => {
  const color = ['bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-teal-300', 'bg-gray-300'];
  return (
    <div className="py-4">
      <h1 className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-5xl">Car Dashboard Counter</h1>
      <div className="flex flex-wrap justify-center gap-2 p-4 my-2 mx-auto border-none md:border-[1px] md:border-violet-100 md:rounded-full md:shadow-md md:shadow-slate-200  w-fit">
        {!loading &&
          !error &&
          dataMakerId.map(({ Make_ID, Make_Name }) => {
            for (let i = 0; i < BrandName.length; i++) {
              if (Make_Name === BrandName[i]) {
                return (
                  <div data-testid="div-Header-async-name" className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium text-slate-900 ${color[i]}`} key={Make_ID}>
                    {Make_Name}
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
