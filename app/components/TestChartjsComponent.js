var React = require("react");
var data = require('../data/user_sample');
var Chart = require('chart.js');
var LineChart = require("react-chartjs/lib/line");
var PieChart = require('react-chartjs/lib/pie')
var Space = require('../styles').space

var pieData = [
            {
                value: 87,
                color:"#d3d3d3",
                highlight: "#FF5A5E",
                label: "SafetyGroup"
            },
            {
                value: 57,
                color: "#939393",
                highlight: "#5AD3D1",
                label: "Power Electricians Co."
            },
            {
                value: 200,
                color: "#696969",
                highlight: "#FFC870",
                label: "Brick & Mortar"
            },
            {
                value: 100,
                color: "#3f3f3f",
                highlight: "#A8B3C5",
                label: "Rick & Sons"
            }
        ];

var TestChartjsComponent = React.createClass({
render:function(){
  return(
    <div>
      <div className = "col-sm-4 text-center" style = {Space}>
        <PieChart data={pieData} />
      </div>
    </div>

  )
}

});



module.exports = TestChartjsComponent;
