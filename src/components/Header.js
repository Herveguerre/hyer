import React from 'react'
import './Style.css'
import '../app/globals.css'

export default function Header() {
    return (
        <div className='header'>
                <div className='logo'>Hyer<span>R</span></div>
                <div className='nav'>
                    <li>Solution</li>
                    <li>A propos de nous</li>
                    <li>Contact</li>
                    <h2> Avion <br/>personnalisée</h2>
                </div>

                <div className='burger' >
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                </div>
        </div>
    )
}
