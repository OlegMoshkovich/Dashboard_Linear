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
  var title = props.title
  return props.isLoading === true

  ? <div>Loading Stacked </div>
  :<div>

  <div className = "col-sm-12 text-center" >
    <h3>{title}</h3>





  <BarChart width={chartWidth} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="Workers"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="1 1"/>
         <Tooltip/>
         <Legend />

           <Bar dataKey="Falls" stackId="b" fill="#e05038" />
           <Bar dataKey="StruckBy" stackId="b" fill="#334431" />
           <Bar dataKey="Trips" stackId="b" fill="#e6af4b" />
           <Bar dataKey="Slips" stackId="b" fill="#f2cbbc" />

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
