import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

interface DoughnutChartProps {
  top: string;
  mid: string;
  jun: string;
  sup: string;
  adc: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  top,
  jun,
  mid,
  sup,
  adc,
}) => {
  const data = {
    labels: [top, jun, mid, sup, adc],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 20, 20, 20, 20],
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
