var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function () {
        return {count: 0, countdownState: 'stopped'}
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownState !== prevState.countdownState) {
            switch (this.state.countdownState) {
                case 'started':
                    this.startTimer();
                    break;

                default:
                    break;
            }
        }
    },
    handleSetCoundown: function (seconds) {
        this.setState({count: seconds, countdownState: 'started'});
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
        }, 1000);
    },
    render: function () {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}></Clock>
                <CountdownForm onSetCountdown={this.handleSetCoundown}></CountdownForm>
            </div>
        );
    }
});

module.exports = Countdown;