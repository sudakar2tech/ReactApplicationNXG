import logo from './logo.svg';
import './Classcomponent.css';
import React from 'react';

class Classcomponent extends React.Component {
    render() {
        return (
            <div className="Classcomponent">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Class Component ,Hello all</h1>
                <Mark />
            </div>)
}
}
class Mark extends React.Component {
    render() {
        return (
            <div>
                <h1>Class Component,Score: 100</h1>
            </div>)
    }
}
export default Classcomponent;
