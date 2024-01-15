const ctx = document.getElementById("myChart");

const dataChart = {
  labels:['Shells','cPanel','cPanel'],
  datasets: [
    {
      data: [300, 200, 100],
      backgroundColor: ["#6359E9", "#64CFF6", "#3A3A5A"],
    },
  ],
};


new Chart(ctx, {
  type: "doughnut",
  data: dataChart,
  options: {
    plugins: {
      legend: {
          display: false
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: false,
      },
    },
    rotation: -90,
    circumference: 180,
    
  },
});
