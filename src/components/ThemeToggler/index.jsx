import React from 'react'
import { Toggler } from './styles'
import { FaMoon, FaSun } from "react-icons/fa";

export default function index(props) {

    function handleChange(e) {
        props.setDarkTheme()
    }

    return (
        <Toggler>
            <input type="checkbox" id="checkbox" onChange={handleChange} />
            <label htmlFor="checkbox" className="label">
                <FaMoon className="icon-moon" />
                <FaSun className="icon-sun" />
                <div className="ball"></div>
            </label>
        </Toggler>
    )
}
