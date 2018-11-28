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

    saveToFirebase = () => {
        fetch(`https://test-backend-98861.firebaseio.com/counter.json`, {
            method: 'PUT',
            body: JSON.stringify(this.state.counterValue)
        })
        // .then(response => response.json())
        // .then(data => console.log(data))
    }

    loadFromFirebase = () => {
        fetch(`https://test-backend-98861.firebaseio.com/counter.json`)
            .then(response => response.json())
            .then(data => this.setState({ counterValue: data }))
    }

    componentDidUpdate() {
        this.saveToFirebase()
    }

    componentDidMount() {
        this.loadFromFirebase()
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