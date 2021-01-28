import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart({labels, cases, recovered, deaths}) {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Confirmed Cases',
                borderColor: "#3e95cd",
                fill: false,
                data: cases,
            },
            {
                label: 'Recovered',
                borderColor: "#16c3bb",
                fill: false,
                data: recovered,
            },
            {
                label: 'Deaths',
                borderColor: "#c45850",
                fill: false,
                data: deaths,
            },
        ]
    }
    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }
    }

    return (
        <div className="line-chart">
            <Line className="chart" data={data} options={options}/>
        </div>
    )
}
