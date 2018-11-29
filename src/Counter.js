import React from 'react'

import { database } from './firebaseConfig'

class Counter extends React.Component {

    state = {
        counterValue: 0
    }

    componentDidMount() {
        database.ref('/counter')
            .on(
                'value',
                snapshot => {
                    this.setState({ counterValue: snapshot.val() })
                }
            )
    }

    incCounter = () => {
        database.ref('/counter').set(this.state.counterValue + 1)
    }
    decCounter = () => {
        database.ref('/counter').set(this.state.counterValue - 1)
    }


    render() {

        return (
            <div>
                <div>
                    <h1>{this.state.counterValue}</h1>
                </div>
                <div>
                    <button
                        onClick={this.incCounter}
                    >
                        +
                    </button>
                    <button
                        onClick={this.decCounter}
                    >
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter