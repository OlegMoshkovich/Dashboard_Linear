var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var data1 = require('../data/user_sample')
var data2 = require('../data/user_sample1')

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart,Pie} from 'recharts';

const data03 = [
  { name: 'Group A', value: 400, v: 89 },
  { name: 'Group B', value: 300, v: 100 },
  { name: 'Group C', value: null, v: 200 },
  { name: 'Group D', value: 200, v: 20 },
  { name: 'Group E', value: 278, v: 40 },
  { name: 'Group F', value: 189, v: 60 },
];

function displayData(array){
  return <pre>{JSON.stringify(array,null,' ')}</pre>
}

function BarRecharts(props){

  var data = props.siteInfo
  return props.isLoading === true

  ? <div></div>
  :<div>

  <div className = "col-sm-12 text-center" >
    <p>PieChart wrapped by ResponsiveContainer</p>
    <div className="pie-chart-wrapper" style={{ width: '100%', height: '400px', backgroundColor: '#f5f5f5' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data03} nameKey="name" valueKey="v" innerRadius="45%" outerRadius="80%" />
        </PieChart>
      </ResponsiveContainer>
    </div>


  </div>
  </div>
}

  BarRecharts.propTypes = {
    siteInfo: PropTypes.array.isRequired
  }

module.exports = PieRecharts;
