var React = require('react');
var PropTypes = React.PropTypes;
var axios = require('axios');
import {RadialChart,XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';



var siteInfoArr = []
var i
var styles = require('../styles')
import $ from 'jquery';

const dataBar = []
const dataLine = []

import {curveCatmullRom} from 'd3-shape';





var UberContainer = React.createClass({
  getInitialState:function(){
  return{
    isLoading:true,
    siteInfo:[]
    }
  },

  componentDidMount:function(){

      axios.get('	https://sheetsu.com/apis/v1.0/04d703afe90a')
        .then(function (response) {

          this.setState({
            isLoading:false,
            siteInfo:response.data
          })
      }.bind(this))
        .catch(function (error) {
          console.log(error);
        })

    },


  render:function(){


    if (this.state.isLoading === false){
      siteInfoArr = this.state.siteInfo;
      console.log( "I am working")
      for (i = 0; i < 50; i++){
        var workerBar ={
          angle:Number(siteInfoArr[i].RiskLevel)
        }
        var workerLine ={

          x:Number(i),
          y:Number(siteInfoArr[i].RiskLevel)
        }


          dataBar.push(workerBar)
          dataLine.push(workerLine)
      }

console.log(dataLine)
    }
  return(

    <div className = "col-sm-12 text-center">

      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
          color="red"
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
          ]}/>
        <XAxis title="X" />
        <YAxis />
      </XYPlot>


    <RadialChart
           innerRadius={50}
           radius={100}
           data={dataBar}
           width={300}
           height={300}
         />

    <XYPlot
    width={300}
    height={600}>
    <LineSeries
      color="blue"
      data={dataLine}/>
    <XAxis title="X" />
    <YAxis title="Y"/>
      </XYPlot>

      <XYPlot
  stackBy="y"
  width={300}
  height={300}>
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <LineSeries
    data={[
      {x: 1, y: 12},
      {x: 2, y: 21},
      {x: 3, y: 2}
    ]}/>
</XYPlot>



    </div>




  )
  }

})

module.exports = UberContainer
