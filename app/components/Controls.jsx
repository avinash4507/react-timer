var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    changeStatus: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        let {countdownStatus} = this.props;
        let renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return (
                    <button className="button secondary" onClick={this.changeStatus('paused')}>Pause</button>
                );
            } else if (countdownStatus === 'paused') {
                return (
                    <button className="button primary" onClick={this.changeStatus('started')}>Start</button>
                );
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.changeStatus('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;