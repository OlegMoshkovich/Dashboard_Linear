var React = require('react');
var typeColor = require('../styles').type
var Main = React.createClass({
  render:function(){
    return(

  <div>
    <div  className ="navbar navbar-default">
      <div className ="navbar-brand" ><a href="/" style={typeColor}>HCSafety</a></div>
        <ul className="nav navbar-nav ">

          <li><a href="/#/TestRecharts">Recharts</a></li>
          <li><a href="/#/TestReactvis">ReactVis|Uber</a></li>
          <li><a href="/#/TestChartjs">Chartjs</a></li>

          <li><a href="/#/dashboard">Dash Sample</a></li>

        </ul>
    </div>
    {this.props.children}
  </div>
  )
  }
});

module.exports = Main;
