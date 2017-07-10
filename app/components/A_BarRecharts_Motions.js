var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var data1 = require('../data/user_sample')
var data2 = require('../data/user_sample1')
import $ from 'jquery';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
var chartWidth = $( window ).width() - 100;

function displayData(array){
  return <pre>{JSON.stringify(array,null,' ')}</pre>
}

function BarRecharts(props){

  var data = props.siteInfo
  return props.isLoading === true

  ? <div>Loading Motion Information</div>
  :<div>
  <h3>Motions</h3>
  <div className = "col-sm-12 text-center" >
  <BarChart width={chartWidth} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="Workers"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="1 1"/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="Bends" fill="#e51c23" />
         <Bar dataKey="Twists" fill="#673ab7" />
         <Bar dataKey="Squats" fill="#009688" />
         <Bar dataKey="Reaches" fill="#ff5722" />
        </BarChart>
    </div>
  </div>
}

  BarRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = BarRecharts;
