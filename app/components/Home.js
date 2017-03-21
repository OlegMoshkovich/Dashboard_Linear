var React = require('react');
var transparentBg =  require('../styles').transparentBg;
var Router = require('react-router');
var Link = Router.Link;


var Home = React.createClass({
  render:function(){
    return(
      <div className = "jumbotron col-sm-12 text-center" style = {transparentBg}>
          <h1>.</h1>
          <p className = 'lead'>Dashboard Research </p>
     </div>
    )
  }
})

module.exports = Home;
