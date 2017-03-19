var React = require('react');
var Controls = require('Controls');
var Clock = require('Clock');

var Timer = React.createClass({
    getInitialState: function () {
        return {count: 0, timerStatus: 'stopped'}
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0, timerStatus: 'stopped'})
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    handleStatusChange: function (newStatus) {
        this.setState({timerStatus: newStatus});
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                timerStatus: 'started'
            });
        }, 1000);
    },
    render: function () {
        let {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}></Clock>
                <Controls
                    onStatusChange={this.handleStatusChange}
                    countdownStatus={timerStatus}></Controls>
            </div>
        );
    }
});

module.exports = Timer;