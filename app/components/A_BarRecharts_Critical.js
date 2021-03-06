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

  ? <div>Loading Critical Information</div>
  :<div>

  <div className = "col-sm-12 text-center" >
    <h3>Critical Events </h3>
    <p>Events omitted from the HCS devices are considered critical.</p>
  <BarChart width={chartWidth} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="Workers"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="1 1"/>
         <Tooltip/>
         <Legend />

         <Bar dataKey="EmergencyAlert" fill="#963019" />
         <Bar dataKey="SafetyAlert" fill="#f2b632" />
         <span class="glyphicons glyphicons-exclamation-sign"></span>

        </BarChart>


    </div>
  </div>
}

  BarRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = BarRecharts;
