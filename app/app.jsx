var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>
), document.getElementById('app'));