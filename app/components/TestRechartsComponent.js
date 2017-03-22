var React = require("react");
import {LineChart,AreaChart,Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,Title,
ResponsiveContainer, ComposedChart, Bar, BarChart} from 'recharts';
var data = require('../data/user_sample')
var space = require('../styles').space

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

 const data06 = [
                 { name: 'Page A', uv: 590, pv: 800, amt: 1400},
                 { name: 'Page B', uv: 868, pv: 967, amt: 1506},
                 { name: 'Page C', uv: 1397, pv: 1098, amt: 989},
                 { name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
                 { name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
                 { name: 'Page F', uv: 1400, pv: 680, amt: 1700}
               ];

var TestRechartsComponent = React.createClass({

  render:function(){
    //console.log(data.BMI);
    return(
<div>
<div className = "col-sm-offset-3" style = {space}>
Rechart components were found to be relatively straight forward to use
</div>
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

<div className = "col-sm-6 col-sm-offset-3 text-centerr" >
<BarChart width={650} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis/>
       <YAxis/>
       <CartesianGrid strokeDasharray="1 6"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="age" fill="#d3d3d3" />
      </BarChart>
  </div>

<div className = "col-sm-2 col-sm-offset-2 text-center" >
    <PieChart width={700} height={300}>
      <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#545454" />
      <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#a8a8a8" label  />
    </PieChart>
</div>

<div className = "col-sm-2  text-center" >
    <PieChart width={710} height={300}>
      <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#545454" />
      <Pie data={data03} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#a8a8a8" label />
    </PieChart>
  <p> Pie Charts require  name: x , value:y - format - to work</p>
</div>





<div className= "col-sm-5 col-sm-offset-3 text-center">
<div className="line-chart-wrapper" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: 'white' }}>
  <ResponsiveContainer>
    <ComposedChart
      data={data06}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />

      <Area type="monotone" dataKey="amt" fill="#a8a8a8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#a8a8a8" />
      <Line type="monotone" dataKey="uv" stroke="#a8a8a8" />

    </ComposedChart>
  </ResponsiveContainer>
</div>
</div>


</div>

  )
  }
});

module.exports = TestRechartsComponent;
