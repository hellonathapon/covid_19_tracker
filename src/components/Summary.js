import React from 'react'
import Arrow from '../assets/svg/arrow.svg'
import ArrowGreen from '../assets/svg/green-arrow.svg'
import Virus from '../assets/svg/virus.svg'
import Defense from '../assets/svg/defense.svg'
import Grave from '../assets/svg/grave.svg'

export default function Summary({ todayData }) {

    console.log(todayData)
    return (
        <div className="summary">
            <div className="sum__card">
                <article>
                    <p>TOTAL CASES</p>
                    { todayData ? (<h4>{todayData.Confirmed}</h4>): (<p>no data!</p>) }
                    <div className="sum__update">
                        <img src={Arrow} alt="arrow up"/>
                        { todayData ? (<span className="update-data">{todayData.NewConfirmed}</span>): null }
                        { todayData ? (<span>{todayData.UpdateDate}</span>): null }
                    </div>
                </article>
                <figure><img className="icon" src={Virus} alt="virus"/></figure>
            </div>
            <div className="sum__card">
                <article>
                    <p>TOTAL RECOVERED</p>
                    { todayData ? (<h4>{todayData.Hospitalized}</h4>): (<p>no data!</p>) }
                    <div className="sum__update">
                        <img src={ArrowGreen} alt="arrow up"/>
                        { todayData ? (<span className="update-data green">{todayData.NewRecovered}</span>): null }
                        { todayData ? (<span>{todayData.UpdateDate}</span>): null }
                    </div>
                </article>
                <figure><img src={Defense} className="icon" alt="cure icon"/></figure>
            </div>
            <div className="sum__card">
                <article>
                    <p>TOTAL DEATHS</p>
                    { todayData ? (<h4>{todayData.Deaths}</h4>): (<p>no data!</p>) }
                    <div className="sum__update">
                        <img src={Arrow} alt="arrow up"/>
                        { todayData ? (<span className="update-data">{todayData.NewDeaths}</span>): null }
                        { todayData ? (<span>{todayData.UpdateDate}</span>): null }
                    </div>
                </article>
                <figure><img src={Grave} className="icon" alt="wreath icon"/></figure>
            </div>
        </div>
    )
}
