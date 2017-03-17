var React = require("react");
import {LineChart,AreaChart,Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,Title,
ResponsiveContainer,} from 'recharts';
var data = require('../data/user_sample')

var data1 = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

var data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

var data02 = [{name: 'A1', value: 100},
                     {name: 'A2', value: 300},
                     {name: 'B1', value: 100},
                     {name: 'B2', value: 80},
                     {name: 'B3', value: 40},
                     {name: 'B4', value: 30},
                     {name: 'B5', value: 50},
                     {name: 'C1', value: 100},
                     {name: 'C2', value: 200},
                     {name: 'D1', value: 150},
                     {name: 'D2', value: 50}]

 const data03 = [
                 { name: 'Group A', value: 400, v: 89 },
                 { name: 'Group B', value: 300, v: 100 },
                 { name: 'Group C', value: null, v: 200 },
                 { name: 'Group D', value: 200, v: 20 },
                 { name: 'Group E', value: 278, v: 40 },
                 { name: 'Group F', value: 189, v: 60 },
               ];

var TestRechartsComponent = React.createClass({

  render:function(){
    //console.log(data.BMI);
    return(
<div>
<div className = "col-sm-6 col-sm-offset-3 text-center" >
      <LineChart width={650} height={300} data={data}
            margin={{top: 0, right: 0, left: 0, bottom: 5}}>
      <XAxis />
      <YAxis />

      <CartesianGrid strokeDasharray="3 3"/>
      <Line type="monotone" dataKey="BMI" stroke="#545454" activeDot={{r: 5}}/>
      <Line type="monotone" dataKey="age" stroke="#a8a8a8" activeDot={{r: 5}}/>

      <Tooltip/>

      </LineChart>
</div>

<div className = "col-sm-6 col-sm-offset-3 text-center" >
  <AreaChart width={650} height={300} data={data}
    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#545454" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#545454" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a8a8a8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#a8a8a8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="BMI" stroke="#545454" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="age" stroke="#a8a8a8" fillOpacity={1} fill="url(#colorPv)" />
  </AreaChart>
</div>

<div className = "col-sm-2 col-sm-offset-2 text-center" >
    <PieChart width={700} height={300}>
      <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#545454" />
      <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#a8a8a8" label />
    </PieChart>
</div>

<div className = "col-sm-2  text-center" >
    <PieChart width={710} height={300}>
      <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#545454" />
      <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#a8a8a8" label />
    </PieChart>
</div>

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
  )
  }
});

module.exports = TestRechartsComponent;
