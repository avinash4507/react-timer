var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
    render: function() {
        return (
            <div>
                countdown.jsx
                <Clock totalSeconds={652}></Clock>
            </div>
        );
    }
});

module.exports = Countdown;