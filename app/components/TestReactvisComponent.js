var React = require('react')
var Space = require('../styles').space

import {  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries,
  AreaSeries,
  RadialChart,
  LineMarkSeries,
  HeatmapSeries,
  ContinuousColorLegend,
  VerticalBarSeries
} from 'react-vis';



var TestReactvisComponent = React.createClass({
  render:function(){
    return(
      <div>
      <div className = "col-sm-12 text-center" style = {Space} >Radial Chart</div>
      <div className = "col-sm-6 col-sm-offset-5 text-center">
      <RadialChart
      animation = {true}
      innerRadius={50}
      radius={140}
      data={[
       {angle: 2},
       {angle: 6},
       {angle: 2},
       {angle: 3},
       {angle: 1}
     ]}
     width={300}
     height={300}
   />
       </div>

       <div className = "col-sm-12 text-center"  style = {Space} >Line/Area Series</div>
         <div className = "col-sm-6 col-lg-offset-5 text-center">

           <XYPlot
            width={300}
            height={300}
            fill = {"transparent"}>

                 <VerticalGridLines />
                 <HorizontalGridLines />
                 <XAxis />
                 <YAxis />
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
                 <AreaSeries
                   className="area-series-example"
                   curve="curveNatural"
                   data={[
                     {x: 1, y: 10},
                     {x: 2, y: 5},
                     {x: 3, y: 15}
                   ]}/>
            </XYPlot>
       </div>



       <div className = "col-sm-12 text-center"  style = {Space} >HeatMap series</div>
         <div className = "col-sm-6 col-lg-offset-5 text-center">
           <XYPlot
             width={300}
             height={300}>
             <XAxis />
             <YAxis />
         <ContinuousColorLegend
              width={300}
              startTitle="100"
              midTitle="150"
              endTitle="200"
            />
         <HeatmapSeries
           className="heatmap-series-example"
           data={[
             {x: 1, y: 0, color: 10},
             {x: 1, y: 5, color: 10},
             {x: 1, y: 10, color: 6},
             {x: 1, y: 15, color: 7},
             {x: 2, y: 0, color: 12},
             {x: 2, y: 5, color: 2},
             {x: 2, y: 10, color: 1},
             {x: 2, y: 15, color: 12},
             {x: 3, y: 0, color: 9},
             {x: 3, y: 5, color: 2},
             {x: 3, y: 10, color: 6},
             {x: 3, y: 15, color: 12}
           ]}/>
         </XYPlot>
         </div>

         <div className = "col-sm-12 text-center"  style = {Space} >VerticalBar Series </div>
           <div className = "col-sm-6 col-lg-offset-5 text-center">
             <XYPlot
               xType="ordinal"
               width={300}
               height={300}>
               <VerticalGridLines />
               <HorizontalGridLines />
               <XAxis />
               <YAxis />
               <VerticalBarSeries
                 className="vertical-bar-series-example"
                 data={[
                   {x: 'A', y: 10},
                   {x: 'B', y: 5},
                   {x: 'C', y: 15}
                 ]}/>
               <VerticalBarSeries
                 data={[
                   {x: 'A', y: 12},
                   {x: 'B', y: 2},
                   {x: 'C', y: 11}
                 ]}/>
             </XYPlot>
           </div>

           <div className = "col-sm-12 text-center"  style = {Space} >VerticalBar Series </div>
             <div className = "col-sm-6 col-lg-offset-5 text-center">
               <XYPlot
                  margin={{bottom: 70}}
                  xType="ordinal"
                  width={300}
                  height={300}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis tickLabelAngle={-45} />
                  <YAxis />
                  <VerticalBarSeries
                    data={[
                      {x: 'Apples', y: 10},
                      {x: 'Bananas', y: 5},
                      {x: 'Cranberries', y: 15}
                    ]}/>
              </XYPlot>
          </div>

      </div>
    )
  }
})

module.exports = TestReactvisComponent
