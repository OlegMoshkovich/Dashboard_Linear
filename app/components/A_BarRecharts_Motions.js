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
  <p> Ergonomically incorrect motions are registered in accordance with predifiend threshold</p>
  <div className = "col-sm-12 text-center" >
  <BarChart width={chartWidth} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="Workers"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="1 1"/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="Bends" stackId="a" fill="#252839" />
         <Bar dataKey="Twists" stackId="a" fill="#f2b632" />
         <Bar dataKey="Squats" stackId="a" fill="#677077" />
         <Bar dataKey="Reaches" stackId="a" fill="#b5b5b7" />
        </BarChart>
    </div>
  </div>
}

  BarRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = BarRecharts;
