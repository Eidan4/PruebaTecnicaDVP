import React, { useState } from 'react'
import { BarChart } from './BarChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const Data = [

    {name: 'Mateus-Brito', followers: 22},
     
    {name: 'uaena02', followers: 2},
    
    {name: 'govfl', followers: 1},
     
    {name: 'alanijohnson', followers: 1},
    
    {name: 'youzhiwen1022', followers: 0},
    
    {name: 'Ilyaberdar', followers: 0},
    
    {name: 'Anubis-311', followers: 0}
];

const BarChartGraphic = ({follower}) => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.name), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.followers),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
    });

    return (
        <div>
            <h2>Gráfico de Barras</h2>
            <BarChart chartData={chartData} />
        </div>
    )
}

export default BarChartGraphic