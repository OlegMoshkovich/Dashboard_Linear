var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var data1 = require('../data/user_sample')
var data2 = require('../data/user_sample1')

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Title} from 'recharts';


function LineRecharts(props){

  var data = props.siteInfo
  return props.isLoading === true

  ? <div></div>
  :<div className = "col-sm-12 text-center" >
        <LineChart width={1000} height={300} data={data}>
        <XAxis  />
        <YAxis/>
        <CartesianGrid strokeDasharray="1 6"/>
        <Line type="monotone" dataKey="Age" stroke="#545454" activeDot={{r: 5}}/>
        <Line type="monotone" dataKey="Name" stroke="#545454" activeDot={{r: 5}}/>
        <Line type="monotone" dataKey="Role" stroke="#545454" activeDot={{r: 5}}/>
        <Tooltip/>
        <Legend />
      
        </LineChart>
  </div>
}

  LineRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = LineRecharts;
