import React from 'react'
import Logo from '../logo.svg'

export default function Header() {
    return (
        <header className="header">
            <figure>
                <img className="App-logo" src={Logo} alt="react logo"/>
            </figure>
            <article>
                <h1>Thailand COVID-19 Tracker</h1>
                <p>Stay safe and keep yourself informed!</p>
            </article>
        </header>
    )
}
