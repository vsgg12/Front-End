import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

interface DoughnutChartProps {
  ingameInfos: { championName: string; averageValue: number }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ ingameInfos }) => {
  const championNames = ingameInfos.map((info) => info.championName);
  const averageValues = ingameInfos.map((info) => info.averageValue);

  const data = {
    labels: championNames,
    datasets: [
      {
        label: '# of Votes',
        data: averageValues,
        backgroundColor: [
          '#000000',
          '#9D2A2C',
          '#B5B5B5',
          '#656565',
          '#8A1F21',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {};

  return (
    <div className="flex flex-col items-center justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
