export const LineChartData = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "GDP growth rate",
      data: [3.2, 2.8, 2.6, 0.5, 4.0, 3.8, 3.5],
      borderColor: "rgb(14, 70, 163)"
    }
  ]
};

export const BarChartData = {
  labels: ["Pelé", "Just Fontaine", "Gerd Müller", "Ronaldo", "Miroslav Klose"],
  datasets: [
    {
      label: "Top goal scorers in World Cup history",
      data: ["12", "13", "14", "15", "16"],
      backgroundColor: ["rgb(14, 70, 163)"]
    }
  ]
};

export const PieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "Youtube", "LinkedIn"],
  datasets: [
    {
      label: "Active users (in millions) ",
      data: [2700, 1400, 370, 2300, 670],
      backgroundColor: [
        "rgb(14, 70, 163)",
        "rgb(181, 27, 117)",
        "rgb(21, 21, 21)",
        "rgb(196, 12, 12)",
        "rgb(3, 174, 210)"
      ],
      hoverOffset: 4
    }
  ]
};
