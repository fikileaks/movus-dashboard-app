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
    //make multiple datasets
    //how to scopeing label and data

    labels: ['Model Count'],
    datasets: [
      {
        label: carList[0],
        data: [count[0]],
        backgroundColor: '#5EEAD4',
      },
      {
        label: carList[1],
        data: [count[1]],
        backgroundColor: '#FCA5A5',
      },
      {
        label: carList[2],
        data: [count[2]],
        backgroundColor: '#86EFAC',
      },
      {
        label: carList[3],
        data: [count[3]],
        backgroundColor: '#D1D5DB',
      },
      {
        label: carList[4],
        data: [count[4]],
        backgroundColor: '#FDE047',
      },
      {
        label: carList[5],
        data: [count[5]],
        backgroundColor: '#A5B4FC',
      },
      {
        label: carList[6],
        data: [count[6]],
        backgroundColor: '#93C5FD',
      },
      {
        label: carList[7],
        data: [count[7]],
        backgroundColor: '#D8B4FE',
      },
      {
        label: carList[8],
        data: [count[8]],
        backgroundColor: '#F9A8D4',
      },
      {
        label: carList[9],
        data: [count[9]],
        backgroundColor: '#FDBA74',
      },
    ],

    // labels: [carList[0], carList[1], carList[2], carList[3], carList[4], carList[5], carList[6], carList[7], carList[8], carList[9]],
    /*   labels: carList, */
    /* 
    datasets: [
      {
        // label: 'All Car Count',
        backgroundColor: ['#5EEAD4', '#FCA5A5', '#86EFAC', '#D1D5DB', '#FDE047', '#A5B4FC', '#93C5FD', '#D8B4FE', '#F9A8D4', '#FDBA74'],
        data: count,
      },
    ], */
    /*  datasets: [
      {
        label: carList[0],
        data: [count[0]],
        backgroundColor: '#5EEAD4',
      },
      {
        label: carList[1],
        data: [count[1]],
        backgroundColor: '#FCA5A5',
      },
      {
        label: carList[2],
        data: [count[2]],
        backgroundColor: '#86EFAC',
      },
      {
        label: carList[3],
        data: [count[3]],
        backgroundColor: '#D1D5DB',
      },
      {
        label: carList[4],
        data: [count[4]],
        backgroundColor: '#FDE047',
      },
    ], */
  };
  // const dataBariss = {};
  //OPTION HERE :)
  const dataBarOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'right',

        labels: {
          display: false,
          usePointStyle: {
            display: true,
          },
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
        ticks: {
          min: 0,
        },
      },
    },
  };

  return (
    <>
      <div className="w-[80%] sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto ">
        <Bar data={dataBar} options={dataBarOptions} />
      </div>
      <div className="p-2 sm:p-4 text-center text-xs sm:text-sm md:text-base font-medium text-slate-700">{defaultName}</div>
    </>
  );
};

export default Charts;
