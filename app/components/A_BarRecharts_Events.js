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

  ? <div>Loading Events Information</div>
  :<div>

  <div className = "col-sm-12 text-center" >
  <h2>Events</h2>
  <p>Registered signals of higher risk order are considered to be be events in the system.</p>
  <BarChart width={chartWidth} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="Workers"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="Falls" stackId="a" fill=" #e05038" />
         <Bar dataKey="StruckBy" stackId="a" fill="e05038" />
         <Bar dataKey="Trips" stackId="a" fill="#e6af4b" />
         <Bar dataKey="Slips" stackId="a" fill="#f2cbbc"  />
        </BarChart>
    </div>
  </div>
}


  BarRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = BarRecharts;
