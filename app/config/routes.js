var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require("../components/Home");

var DashboardWgContainer = require('../containers/DashboardWgContainer')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute  component={Home}/>
      <Router path = 'dashboardwg' component = {DashboardWgContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
