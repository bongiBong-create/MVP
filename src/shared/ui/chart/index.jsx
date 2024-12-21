import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export const Chart = ({ chartParams }) => {
  return (
    <>
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "My first Dataset",
              data: chartParams,
            },
          ],
        }}
      />
      <Doughnut
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "My first Dataset",
              data: chartParams,
            },
          ],
        }}
      />
    </>
  );
};
