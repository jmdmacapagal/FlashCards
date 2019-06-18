import React from 'react'
import './styles/FlashCard.css'

const FlashCard = ({ dataDisplay, onCardClick, onClickNext, onClickPrevious }) => {
    return (
        <div className="card">
            <div onClick={onCardClick} className="content">
                <h2>{dataDisplay()}</h2>
            </div>
            <div className="button-group">
                <button onClick={onClickPrevious} id="previous">Previous</button>
                <button onClick={onClickNext} id="next">Next</button>
            </div>
        </div>
    )
}

export default FlashCard