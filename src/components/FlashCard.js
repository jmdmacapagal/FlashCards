import React from 'react'
import './styles/FlashCard.css'

const FlashCard = (props) => {
    const dataDisplay = props.flashCards[props.count][props.display]
    return (
        <div className="card">
            <div onClick={props.onCardClick} className="content">
                <h2>{dataDisplay}</h2>
            </div>
            <div className="button-group">
                <button onClick={props.onClickPrevious} id="previous">Previous</button>
                <button onClick={props.onClickNext} id="next">Next</button>
            </div>
        </div>
    )
}

export default FlashCard