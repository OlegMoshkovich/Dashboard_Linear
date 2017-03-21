var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')


import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart,Pie} from 'recharts';




function displayData(array){
  return <pre>{JSON.stringify(array,null,' ')}</pre>
}

function A_PieRecharts(props){
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

  return props.isLoading === true
  ? <div>Loading Pie Chart</div>
  :<div>


    <div className="pie-chart-wrapper" style={{ width: '100%', height: '400px', backgroundColor: 'white' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={pieData} nameKey="value" valueKey="value" innerRadius="45%" outerRadius="80%" label/>
        </PieChart>
      </ResponsiveContainer>
    </div>





  </div>
}


module.exports = A_PieRecharts;
