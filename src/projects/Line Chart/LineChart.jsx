import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChart = () => {
  const [users, setUsers] = useState([
    { name: "John", items_delivered: 22, miles_driven: 100 },
    { name: "Jane", items_delivered: 96, miles_driven: 164 },
    { name: "Mary", items_delivered: 40, miles_driven: 106 },
    { name: "Bob", items_delivered: 122, miles_driven: 172 },
    { name: "Alice", items_delivered: 43, miles_driven: 122 },
    { name: "Joe", items_delivered: 74, miles_driven: 110 },
    { name: "Sue", items_delivered: 93, miles_driven: 149 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newUsers = users.map((user) => {
        return {
          ...user,
          items_delivered: (user.items_delivered += Math.floor(
            Math.random() * 2
          )),
          miles_driven: (user.miles_driven += Math.floor(Math.random() * 5)),
        };
      });

      setUsers(newUsers);
    }, 2000);

    return () => clearInterval(interval);
  }, [users]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Line
        options={options}
        data={{
          labels: users.map((user) => user.name),
          datasets: [
            {
              label: "Items Delivered",
              data: users.map((user) => user.items_delivered),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Mles Driven",
              data: users.map((user) => user.miles_driven),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
        className="md:py-[5rem] md:px-[10rem] p-0"
      />
    </div>
  );
};

export default LineChart;
