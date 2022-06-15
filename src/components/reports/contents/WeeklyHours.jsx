import React from 'react'

export default function WeeklyHours() {
  return (
    <div>WeeklyHours</div>
  )
}


// // import { useState } from "react";
// // import BarChart from "../../graphs/BarChart";
// // import { LogsData } from "../../../data/Data";

// // export default function WeeklyHours() {
// //   //datetoday - 7, reduce(LogsData.timediff) to Mon Tue ....
// //   //
// //   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// //   const dayNow = new Date();
// //   let day = days[dayNow.getDay()];

// //   //loop until day =
// //   const logsPerDay = [];
// //   const [logsData, setLogsData] = useState({
// //     labels: days,
// //     datasets: [
// //       {
// //         label: "WeeklyHours",
// //         data: {},
// //       },
// //     ],
// //   });
// //   return (
// //     <div>
// //       <h1> {day} </h1>;
// //     </div>
// //   );
// // }

// // import  { useRef, useEffect, useState } from 'react';
// // import LineChart from '../../graphs/LineChart'
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   Tooltip,
// //   Legend,
// // } from 'chart.js';
// // import { Chart } from 'react-chartjs-2';

// // // ChartJS.register(
// // //   CategoryScale,
// // //   LinearScale,
// // //   PointElement,
// // //   LineElement,
// // //   Tooltip,
// // //   Legend
// // // );

// // const labels = {}
// // const colors = [
// //   'red',
// //   'orange',
// //   'yellow',
// //   'lime',
// //   'green',
// //   'teal',
// //   'blue',
// //   'purple',
// // ];

// // export const data = {
// //   labels,
// //   datasets: [
// //     {
// //       label: 'Dataset 1',
// //       data: labels.map(() => ({ min: -1000, max: 1000 })),
// //     },
// //     {
// //       label: 'Dataset 2',
// //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
// //     },
// //   ],
// // };


// // const config = {
// //   type: 'line',
// //   data: data,
// //   options: {
// //     responsive: true,
// //     plugins: {
// //       title: {
// //         display: true,
// //         text: 'Min and Max Settings'
// //       }
// //     },
// //     scales: {
// //       y: {
// //         min: 10,
// //         max: 50,
// //       }
// //     }

// const graphData = {
//     "averageWeekData": [
//         {
//             "day": "TUE",
//             "sum": "5.8000"
//         },
//         {
//             "day": "SUN",
//             "sum": "3.5000"
//         },
//         {
//             "day": "MON",
//             "sum": "110.2143"
//         }
//     ],
//     "thisWeekData": [
//         {
//             "day": "MON",
//             "sum": "1543"
//         },
//         {
//             "day": "TUE",
//             "sum": "27"
//         }
//     ]
// }

// const days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"];
// // const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

// const labels = Utils.months({count: 7});
// const data = {
//   labels: days,
//   datasets: [
//     {
//       label: 'Average Weekly Hours',
//       data: {graphData["averageWeekData"].map(({sum}) => sum)},
      
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.CHART_COLORS.red,
//     },
//     {
//       label: 'This Week Hours',
//       data: [100, 33, 22, 19, 11, 49, 30],
//       borderColor: Utils.CHART_COLORS.blue,
//       backgroundColor: Utils.CHART_COLORS.blue,
//     }
//   ]
// };