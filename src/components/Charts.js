import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
Chart.register(ArcElement);
Chart.register(ArcElement, Tooltip, Legend);
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
Chart.defaults.font.family = 'Poppins, sans-serif';
// Chart.defaults.font.style = 'bold';
Chart.defaults.font.weight = 'bold';
//how to change label font size

const Charts = ({ count, carList, year, defaultName }) => {
  /* Data Here */
  const dataBar = {
    labels: carList,
    datasets: [
      {
        // label: 'All Car Count',
        backgroundColor: ['#5EEAD4', '#FCA5A5', '#86EFAC', '#D1D5DB', '#FDE047', '#A5B4FC', '#93C5FD', '#D8B4FE', '#F9A8D4', '#FDBA74'],
        data: count,
      },
    ],
  };
  //OPTION HERE :)
  const dataBarOptions = {
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          min: 0,
        },
      },
    },
  };

  console.log(carList, 'ini data carList');

  return (
    <>
      <div className="w-[80%] sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto ">
        <Bar data={dataBar} options={dataBarOptions} />
      </div>
      {/* <div className="mx-auto bg-red-200 text-center">{year === 0 ? <div>Data Keseluruhan Tahun</div> : <div>Data Tahun {year}</div>}</div> */}
      <div className="p-2 sm:p-4 text-center text-xs sm:text-sm md:text-base font-medium text-slate-700">{defaultName}</div>
    </>
  );
};

export default Charts;
