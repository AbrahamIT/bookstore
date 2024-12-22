// assets/js/chart.js

const ctx = document.getElementById("booksChart").getContext("2d");
const booksChart = new Chart(ctx, {
  type: "bar", // Тип графика
  data: {
    labels: ["Классика", "Фантастика", "Детективы"], // Названия жанров
    datasets: [
      {
        label: "Количество книг",
        data: [253, 118, 159], // Количество книг в каждом жанре
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true, // Начинать ось Y с нуля
      },
    },
  },
});
