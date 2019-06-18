import React, { Component } from 'react'
import FlashCard from './FlashCard'
import flashCardData from './data' 
import './styles/App.css'
const data = flashCardData()

export default class App extends Component {
    state = {
        flashCards: [],
        count: 0,
        display: 'front'
    }

    componentDidMount() {
        this.setState({
            flashCards: data
        }) 
    }

    onClickNext = e => {
        if (this.state.count < this.state.flashCards.length - 1) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    onClickPrevious = e => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    onCardClick = e => {
        if (this.state.display === 'front') {
            this.setState({
                display: 'back'
            })
        } else {
            this.setState({
                display: 'front'
            })
        }
    }

    dataDisplay = () => {
        const { flashCards, count, display } = this.state
        return flashCards[count][display]
    }

    render() {
        if (!this.state.flashCards[0]) {
            return <div>Loading...</div>
        }
        return (
            <div className="container">
                <FlashCard
                    onCardClick={this.onCardClick}
                    onClickNext={this.onClickNext}
                    onClickPrevious={this.onClickPrevious}
                    dataDisplay={this.dataDisplay}
                />
            </div>
        )
    }
}