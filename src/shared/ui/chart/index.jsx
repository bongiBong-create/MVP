import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

export const Chart = ({ type, values }) => {
  const labels = values.map((value) => value.name);
  const dataValues = values.map((value) => value.value);

  if (type === "histogram") {
    return (
        <Bar
          options={{
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
                ticks: {
                  stepSize: 10,
                },
              },
            },
          }}
          data={{
            labels: labels,
            datasets: [
              {
                label: "data",
                data: dataValues,
              },
            ],
          }}
        />
    );
  }

  if (type === "round") {
    return (
      <div style={{ width: "500px" }}>
        <Doughnut
          options={{
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
          }}
          data={{
            labels: labels,
            datasets: [
              {
                label: "процент",
                data: dataValues,
              },
            ],
          }}
        />
      </div>
    );
  }
};
