var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require("../components/Home");

var DashboardWgContainer = require('../containers/DashboardWgContainer')
var UberContainer = require('../containers/UberContainer')


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute  component={Home}/>
      <Router path = 'dashboardwg' component = {DashboardWgContainer}/>
      <Router path = 'uber' component = {UberContainer}/>

    </Route>
  </Router>
);

module.exports = routes;
