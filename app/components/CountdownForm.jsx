var React = require('react');

var CountdownForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        let seconds = this.refs.seconds.value;
        if (seconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(seconds, 10));
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
                    <input type="text" placeholder="Enter time in seconds" ref="seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;