var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function () {
        return {count: 0, countdownStatus: 'stopped'}
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                default:
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    handleSetCoundown: function (seconds) {
        this.setState({count: seconds, countdownStatus: 'started'});
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0
                    ? newCount
                    : 0
            });
            if (newCount === 0) {
                this.setState({
                    countdownStatus: 'stopped'
                })
            }
        }, 1000);
    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus})
    },
    render: function () {
        var {count, countdownStatus} = this.state;
        let renderControls = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls
                    onStatusChange={this.handleStatusChange}
                    countdownStatus={countdownStatus}></Controls>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCoundown}></CountdownForm>
            }
        };
        return (
            <div>
                <Clock totalSeconds={count}></Clock>
                {renderControls()}
            </div>
        );
    }
});

module.exports = Countdown;