import React from 'react'

// const Title = (props) => {
//     return (
//         <div className="section-title">
//             <h2>{props.firstTitle}<span> {props.secondTitle}</span></h2>
//         </div>
//     )
// }

const Title = ({ firstTitle, secondTitle }) => {
    return (
        <div className="section-title">
            <h2>{firstTitle}<span> {secondTitle}</span></h2>
        </div>
    )
}

export default Title