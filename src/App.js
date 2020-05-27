import React from 'react';
import {connect} from 'react-redux';

function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    const secondsPrefix = seconds < 10 ? '0' : '';
    const milliseconds = millis % 1000;
    const prefixMiliseconds = milliseconds > 99 ? '' : milliseconds > 9 ? '0' : '00';
    return `${minutes}:${secondsPrefix}${seconds}:${prefixMiliseconds}${milliseconds}`;
}

const App = ({active, value, onReset, onStart, onPause}) => (

    <div>
        <h1>Timer</h1>
        <div>
            <span>{millisToMinutesAndSeconds(value)}</span>
            <div>
                <br/>
                <button onClick={onStart} disabled={active}>Start</button>
                <button onClick={onPause} disabled={!active}>Stop</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        active: state.active,
        reset: state.reset,
        value: state.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStart: () => dispatch({type: 'START'}),
        onPause: () => dispatch({type: 'STOP'}),
        onReset: () => dispatch({type: 'RESET'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
