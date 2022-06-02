import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


export default class Counter extends React.Component {
    static propTypes = {
        text: PropTypes.string
    }
    
    
    static defaultProps = {
        text: 'Привет!'
    }

    constructor(props) {
        super(props);

        this.state = {
            counter:0
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
       const { text } = this.props;
        
       return (
            <div>
                <div>{text}</div>
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>Кнопка</button>
            </div>
        )
    }

}