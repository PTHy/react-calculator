import React, {Component} from 'react';
import Input from './Input';
import './calculator.scss'

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0
    };
    render() {
        let { num1, num2, result } = this.state;

        return (
            <div className="calculator-style">
                <Input num1={num1} num2={num2} result={result} handleChange={this.handleChange}/>
                <div>
                    <button onClick={this.handlePlus}>+</button>
                    <button onClick={this.handleMinus}>-</button>
                    <button onClick={this.handleMulti}>*</button>
                    <button onClick={this.handleDiv}>/</button>
                </div>
            </div>
        );
    }

    handlePlus = () => {
        let { num1, num2 } = this.state;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        this.setState({
            result: num1 + num2,
        });
    }

    handleMinus = () => {
        let { num1, num2 } = this.state;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        this.setState({
            result: num1 - num2,
        });
    }

    handleMulti = () => {
        let { num1, num2 } = this.state;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        this.setState({
            result: num1 * num2,
        });
    }

    handleDiv = () => {
        let { num1, num2 } = this.state;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        this.setState({
            result: num1 / num2,
        });
    }

    handleChange = (event) => {
        console.log(event.target.id);
        switch (event.target.id) {
            case "num1":
                this.setState({
                    num1: event.target.value
                });
                break;
            case "num2":
                this.setState({
                    num2: event.target.value
                });
                break;
        }
    }
}

export default Calculator;