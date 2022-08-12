const History = ({ historyLog, loading, handleSubmit }) => {
  return (
    <>
      {historyLog.length !== 0 && !loading ? (
        <>
          <div className="p-2 sm:p-4 text-center text-xs sm:text-sm md:text-base font-medium text-slate-700">History Log (click to see history)</div>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {historyLog.slice(0, 10).map((item, index) => {
              return (
                <button onClick={handleSubmit} className="bg-slate-200 border-2 border-slate-400 hover:bg-slate-300 px-4 py-2 rounded-full text-center text-xs sm:text-sm md:text-base font-medium text-slate-700" key={index}>
                  {item.year}
                </button>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default History;
