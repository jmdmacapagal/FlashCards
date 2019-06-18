import React from 'react'

const FlashCard = ({ data }) => {
    console.log(data)
    return (
        <div>
            <div>
                {data.front}
            </div>
        </div>
    )
}

export default FlashCard