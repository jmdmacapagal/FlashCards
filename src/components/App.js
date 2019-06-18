import React, { Component } from 'react'
import FlashCard from './FlashCard'
import data from './data'
const flashCardData = data()

export default class App extends Component {
    state = {
        flashCards: []
    }

    componentDidMount() {
        this.setState({
            flashCards: flashCardData
        })
    }

    flashCardList = () => {
        const data = this.state.flashCards.map((data, i) => {
            return <FlashCard key={i} data={data} />
        })

        return data
    }
    

    render() {
        return (
            <div>
                { this.flashCardList()}
            </div>
        )
    }
}