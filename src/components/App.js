import React, { Component } from 'react'
import FlashCard from './FlashCard'

export default class App extends Component {
    state = {
        flashCards: [
            {
                front: 'How are you?',
                back: 'Kamusta ka?'
            },
            {
                front: 'How old are you?',
                back: 'Ilang taon kana?'
            },
            {
                front: 'Where do you live',
                back: 'Saan ka nakatira?'
            },
            {
                front: 'Have you eaten?',
                back: 'Kumain ka na ba?'
            }
        ],
        count: 0,
        display: 'front'
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

    render() {
        const dataDisplay = this.state.flashCards[this.state.count][this.state.display]
        return (
            <div style={{ width: '400px', margin: 'auto', marginTop: '20px'}}>
                <div onClick={this.onCardClick} 
                style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {dataDisplay}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <button onClick={this.onClickPrevious}>Previous</button>
                    <button onClick={this.onClickNext}>Next</button>
                </div>
            </div>
        )
    }
}