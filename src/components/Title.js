import React from 'react'

const Title = ({ firstTitle, secondTitle }) => {
    return (
        <div className="section-title">
            <h2>{firstTitle}<span> {secondTitle}</span></h2>
        </div>
    )
}

export default Title