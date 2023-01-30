import React from "react";
import Chart from "react-apexcharts";
//https://bioelectromagnetism.wordpress.com/2012/11/28/data-from-ecg-recording-in-todays-class/ sample 1 data ecg

const ECGplot = () => {
  const options = {
    xaxis: {
      // categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      categories: [0, 200, 400, 600, 800, 1000, 1200]
    }
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: "series-2",
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    },
    {
      name: "series-3",
      data: [24, 20, 5, 75, 42, 79, 72, 35]
    }
  ];

  const ECGdata = [
    {
      name: "ECG sample data 1",
      data: []
    }
  ]

  return <Chart options={options} series={series} type="area" />;
};
export default ECGplot;
