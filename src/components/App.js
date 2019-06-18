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
        count: 0
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

    render() {
        return (
            <div>
                {this.state.flashCards[this.state.count].front}
                <div>
                    <button onClick={this.onClickNext}>Next</button>
                    <button onClick={this.onClickPrevious}>Previous</button>
                </div>
            </div>
        )
    }
}