var React = require('react');
var transparentBg =  require('../styles').transparentBg;
var Router = require('react-router');
var Link = Router.Link;


var Home = React.createClass({
  render:function(){
    return(
      <div className = "jumbotron col-sm-12 text-center" style = {transparentBg}>
          <h1 className = 'lead'>Western Growers Pilot</h1>
          <p>Sample Pilot Report </p>
          
     </div>
    )
  }
})

module.exports = Home;
