var React = require('react');
var {IndexLink, Link} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active" activeStyle={{
                                fontWeight: 'bold'
                            }}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/avinash4507/react-timer" target="_blank">Avinash Singh</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});
 
module.exports = Nav;