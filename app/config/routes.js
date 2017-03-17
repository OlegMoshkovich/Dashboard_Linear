var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require("../components/Home");

var WorkerInfoContainer = require('../containers/WorkerInfoContainer')
var DashboardContainer = require('../containers/DashboardContainer')

//Test Components
var TestRechartsComponent = require('../components/TestRechartsComponent')
var TestReactvisComponent = require('../components/TestReactvisComponent')
var TestChartjsComponent = require('../components/TestChartjsComponent')



var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute  component={Home}/>

      <Router path = "TestRecharts" component = {TestRechartsComponent}/>
      <Router path = "TestReactvis" component = {TestReactvisComponent}/>
      <Router path = "TestChartjs" component = {TestChartjsComponent}/>



      <Router path = 'dashboard' component = {DashboardContainer}/>

    </Route>
  </Router>
);

module.exports = routes;
