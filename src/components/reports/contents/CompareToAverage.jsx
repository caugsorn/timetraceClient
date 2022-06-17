


import 'chart.js/auto';

import { useContext } from "react";
import { LogContext } from "../../../contexts/LogContext";

import { Chart, Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, Legend } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, Legend);

export default function CompareToAverage() {
    const ctx = useContext(LogContext);
    const data = {
        labels: ctx.thisWeekGraphData.map((el) => el.day),
        datasets: [
            {label: 'This week', 
            data: ctx.thisWeekGraphData.map((el) => el.sum/(60)),
    }, {label: 'Average', 
            data: ctx.averageGraphData.map((el) =>el.sum/(60)),
    }, 
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
    {console.log(ctx)}
    <Line data={data}/>
    </div>)
}