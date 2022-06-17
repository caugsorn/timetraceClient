// import Doughnut from "../../../components/graphs/Doughnut";
// import {Chart as ChartJS} from 'chart.js/auto'
// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
import 'chart.js/auto';

import { useContext } from "react";
import { LogContext } from "../../../contexts/LogContext";

import { Chart, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Legend } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, Legend);


export default function HoursPerCategory() {
    const ctx = useContext(LogContext);
    // console.log(ctx)
    const data = {
        labels: ctx.categoryGraphData.map((category) => category.category),
        datasets: [
            {label: 'hour(s)', 
            data: ctx.categoryGraphData.map((category) => category.sum),
    }
        ],
    }
    const options = {  plugins:{
   legend: {
    position: 'right',
    align: 'start'
   }
  }
 }
  return (<div className="w-3/5 h-3/5">
    {/* {console.log(ctx)} */}
    <Doughnut data={data} option={options}/>
    </div>)
}