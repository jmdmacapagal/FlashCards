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

    render() {
        return (
            <div>
                
            </div>
        )
    }
}