var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var data1 = require('../data/user_sample')
var data2 = require('../data/user_sample1')
import $ from 'jquery';
var chartWidth = $( window ).width() - 100;

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Title} from 'recharts';


function LineRecharts(props){

  var data = props.siteInfo
  return props.isLoading === true

  ? <div>Loading Line Chart</div>
  :<div className = "col-sm-12 text-center" >
  <h3>Risk Profiles </h3>
        <LineChart width={chartWidth} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="Workers"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="1 6"/>
        <Line type="monotone" dataKey="RiskLevel" stroke="#ff5722" activeDot={{r: 5}}/>

        <Tooltip/>
        <Legend />

        </LineChart>
  </div>
}

  LineRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = LineRecharts;
