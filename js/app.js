

import ReactDOM from 'react-dom'
import React from 'react'
import Header from './header'
import MortgageCalculator from './MortgageCalculator'


class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="React Mortgage Calculator"/>
                <MortgageCalculator principal="200000" years="30" rate="5"/>
            </div>
        );
    }
};

ReactDOM.render(<App/>,  document.getElementById("app"));