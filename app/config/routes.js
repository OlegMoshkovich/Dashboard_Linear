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
var NumberContainer = require('../containers/NumberContainer')

//Test Components
var TestRechartsComponent = require('../components/TestRechartsComponent')
var TestReactvisComponent = require('../components/TestReactvisComponent')
var TestChartjsComponent = require('../components/TestChartjsComponent')

var TestReactvisComponent_1 = require('../components/TestReactvisComponent_1')


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute  component={Home}/>

      <Router path = "TestRecharts" component = {TestRechartsComponent}/>
      <Router path = "TestReactvis" component = {TestReactvisComponent}/>
      <Router path = "TestChartjs" component = {TestChartjsComponent}/>

      <Router path = "TestReactvis_1" component = {TestReactvisComponent_1}/>



      <Router path = 'dashboard' component = {DashboardContainer}/>
      <Router path = 'number' component = {NumberContainer}/>

    </Route>
  </Router>
);

module.exports = routes;
