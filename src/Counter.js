import React from 'react'

class Counter extends React.Component {

    state = {
        counterValue: 0
    }

    incCounter = () => {
        this.setState({ counterValue: this.state.counterValue + 1 })
    }
    decCounter = () => {
        this.setState({ counterValue: this.state.counterValue - 1 })

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