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
                borderColor: "#3cba9f",
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

    return (
        <div className="line-chart">
            <Line data={data}/>
        </div>
    )
}
