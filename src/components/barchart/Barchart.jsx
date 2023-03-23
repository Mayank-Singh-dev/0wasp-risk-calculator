import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../barchart/Barchart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  return (
    <>
      <h2>Threat Indicator</h2>
      <div className="container Chart__container">
        <div className="data__container">
          <Bar id='mychart'
            data={{
              labels: ["Threat Agent", "Vulnerability Factor", "Technical Impact", "Business Impact"],
              datasets: [
                {
                  label: "Threat Score",
                  data: [],
                  backgroundColor: ["	#5f9ea0", "	#5f9ea0", "	#5f9ea0", "	#5f9ea0"],
                  borderColor: ["	#5f9ea0", "	#5f9ea0", "	#5f9ea0", "	#5f9ea0"],
                  borderWidth: 0.5,
                },
              ],
            }}
            height={400}
            width={400}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Barchart;
