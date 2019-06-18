import React, { Component } from 'react'
import FlashCard from './FlashCard'
import './styles/App.css'

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
        
        return (
            <div className="container">
                <FlashCard
                    onCardClick={this.onCardClick}
                    onClickNext={this.onClickNext}
                    onClickPrevious={this.onClickPrevious}
                    {...this.state}
                />
            </div>
        )
    }
}