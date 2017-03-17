var React = require("react");
var Chart = require('chart.js');
var PieChart = require('react-chartjs/lib/pie')
var Space = require('../styles').space


var pieOptions = {
      animatable: false
};

function PieChartjs(props){
var pieData = [
            {
                value: props.companies.SafetyGroup,
                color:"#d3d3d3",
                highlight: "#FF5A5E",
                label: "SafetyGroup"
            },
            {
                value: props.companies.PowerElectriciansCo,
                color: "#939393",
                highlight: "#5AD3D1",
                label: "Power Electricians Co."
            },
            {
                value: props.companies.BrickMortar,
                color: "#696969",
                highlight: "#FFC870",
                label: "Brick & Mortar"
            },
            {
                value: props.companies.RicksonSons,
                color: "#3f3f3f",
                highlight: "#A8B3C5",
                label: "Rick & Sons"
            }
        ];

console.log(props.companies.SafetyGroup)

return props.isLoading === true
? <div></div>
:<div>
  <div className = "col-sm-4 text-center" style = {Space}>
    <PieChart data={pieData} options={pieOptions}/>
  </div>
</div>
}

module.exports = PieChartjs;
