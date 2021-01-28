import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart() {
    const data = {
        labels: ['1', '2', '3'],
        datasets: [{
            label: 'Situation in 10 days',
            data: [10, 30 ,100]
        }]
    }

    return (
        <div className="line-chart">
            <Line data={data}/>
        </div>
    )
}
