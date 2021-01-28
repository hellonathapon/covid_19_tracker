import React from 'react'

export default function Summary({ todayData }) {

    console.log(todayData)

    return (
        <div className="summary">
            <div className="sum__card">
                <article>
                    <p>TOTAL</p>
                    { todayData ? (<h4>{todayData.Confirmed}</h4>): (<p>no data!</p>) }
                </article>
                <figure>Icon</figure>
            </div>
            <div className="sum__card">
                <article>
                    <p>HOSPITALIZED</p>
                    { todayData ? (<h4>{todayData.Hospitalized}</h4>): (<p>no data!</p>) }
                </article>
                <figure>Icon</figure>
            </div>
            <div className="sum__card">
                <article>
                    <p>DEATHS</p>
                    { todayData ? (<h4>{todayData.Deaths}</h4>): (<p>no data!</p>) }
                </article>
                <figure>Icon</figure>
            </div>
        </div>
    )
}
