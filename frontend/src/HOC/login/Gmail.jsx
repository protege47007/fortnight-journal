import React from 'react'
import { FaGoogle} from 'react-icons/fa'
export default function Gmail() {
    return (
        <button className="gmail-btn">
            <FaGoogle 
            style={{color: "#EA4335"}} 
            size='20px' 
            className="g-icon"/>
            Gmail
        </button>
    )
}
