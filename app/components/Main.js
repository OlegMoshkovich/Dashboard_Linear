var React = require('react');
var typeColor = require('../styles').type


var Main = React.createClass({
  render:function(){
    return(
  <div>
    <div  className ="navbar navbar-default" style={typeColor}>

      <div className ="navbar-brand" ><a href="/" style={typeColor}>HCS+WG Pilot</a></div>

        <ul className="nav navbar-nav">
           <li><a href="/#/dashboardwg" style={typeColor}>Baseline</a></li>
           <li><a href="/#/dashboardwg" style={typeColor}>Monthly Report # 1</a></li>
           <li><a href="/#/dashboardwg" style={typeColor}>Monthly Report # 2</a></li>
           <li><a href="/#/dashboardwg" style={typeColor}>Monthly Report # 3</a></li>
           <li><a href="/#/uber" style={typeColor}>Final Report</a></li>
           <li><a href="/#/dashboardwg" style={typeColor}>.</a></li>
           <li><a href="/#/dashboardwg" style={typeColor}>Definitions</a></li>
        
        </ul>
    </div>
    {this.props.children}
  </div>
  )
  }
});

module.exports = Main;
