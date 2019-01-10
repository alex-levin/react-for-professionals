import React, { Component } from 'react';

// export default Introduction extends Component {
class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hey there!',
            userInput: ''
        }

        // same as below
        // we want to bind this function to the scope of the class
        // this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (e) => {
        const { value } = e.target;
        console.log('value:', value);
        // synchronously changes state value
        this.setState({ userInput: value });
    }

    render() {
        return (
            <div>
                <input type="text" value = {this.state.userInput} onChange={this.handleInput.bind(this)} />
                <h1>{ this.state.userInput }</h1>
            </div>
        );
    }
}

export default Introduction;

/*
onChange={this.handleInput.bind(this)} - we want to bind this function to the scope of the class

*/