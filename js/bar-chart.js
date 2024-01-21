const ctx2 = document.getElementById("myChart2");
let labels = [
  "Leads",
  "Webmail",
  "cPanel",
  "Shells",
  "Mailers",
  "RDPs",
  "SSH/WHM",
  "SMTPs",
  "Account",
];
let data = [300, 200, 170, 300, 200, 310, 500, 250, 130];
let backgroundColor = [
  "#8D79F7",
  "#FEBD38",
  "#8D79F6",
  "#FEBD38",
  "#8D79F6",
  "#FEBD38",
  "#8D79F6",
  "#FEBD38",
  "#8D79F6",
];
const dataChart2 = {
  labels: labels,
  datasets: [
    {
      data: data,
      backgroundColor: backgroundColor,
      borderRadius: 5,
    },
  ],
};

let chart = new Chart(ctx2, {
  type: "bar",
  data: dataChart2,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "#00000000",
          borderColor: "#00000000",
        },
      },
      y: {
        display: false,
        stacked: true,
      },
    },
  },
});

let legends = document.querySelector(".legends");

for (let i = 0; i < data.length; i++) {
  legends.innerHTML += `<div class="legend">
  <span style="background-color:${backgroundColor[i]};"></span>
  <p>${labels[i]}</p>
</div>`;
}
