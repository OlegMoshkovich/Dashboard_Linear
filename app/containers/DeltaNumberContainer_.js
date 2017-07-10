var React = require('react');
var PropTypes = React.PropTypes;
var DeltaNumberComponent  = require('../components/A_DeltaNumberComponent');
import Button from 'react-bootstrap/lib/Button';
var axios = require('axios');
var text = "SafeScore";
var previousCount = 0;

var DeltaNumberContainer = React.createClass({
  getInitialState:function(){
  return{
    isLoading:true,
    siteInfo:[],
    siteInfoPrevious:[],
    delta:true
    }
  },

  componentDidMount:function(){
    this.setState({
      isLoading:false,
      count:0
    })
    },

  workerTotal(siteInfo) {
      var groupObject = {}
      var total=0;
      var number;
      var groups;
      var TotalWorkers;
      for ( var i=0; i < siteInfo.length;i++){
      var name = siteInfo[i].Group
        if (groupObject[name]){
          groupObject[name]++
        }else{
          groupObject[name] = 1
        }
      }

      var size = Object.keys(groupObject).length;
      Object.keys(groupObject).forEach(function(key) {
        number = Number(groupObject[key])
        total = total + number
      });
      return {groups:groupObject, totalWorkers:total}
    },

  increase: function(e) {
    var currentCount = this.state.count;
    var deltaCount = currentCount-previousCount;
    if (deltaCount>0){
      this.state.delta = true
    }
    console.log("currentCount: " + currentCount + "previousCount: " + previousCount + "deltaCount: " + deltaCount);

    if (e.shiftKey) {
       currentCount += 10;
     } else {
       currentCount += 1;
     }
   this.setState({
     count: currentCount
     });

      previousCount = this.state.count;

   },

   decrease: function(e) {
     var currentCount = this.state.count;
     var deltaCount = currentCount-previousCount;
     console.log("currentCount: " + currentCount + "previousCount: " + previousCount + "deltaCount: " + deltaCount);
     if (deltaCount<= 0){
       this.state.delta = false
     }
     if (e.shiftKey) {
        currentCount -= 10;
      } else {
        currentCount -= 1;
      }
    this.setState({
      count: currentCount
      });
previousCount = this.state.count;
    },

   handleDelta: function(e){
     previousCount = this.state.count
     this.setState({
      delta:false
     })
     console.log(this.state.delta)

   },


  render:function(){

  if (this.state.isLoading === false){
      // var totalWorkers = this.workerTotal(this.state.siteInfo).totalWorkers
      var totalWorkers = 55
        }

    return(

      <div>
          <DeltaNumberComponent
          isLoading ={this.state.isLoading}
          siteInfo={this.state.siteInfo}
          totalWorkers = {totalWorkers}
          text = {text}
          count = {this.state.count}
          delta = {this.state.delta}
          />

          <p/>
        <Button  onClick = {this.increase}>+</Button>
        <Button  onClick = {this.decrease}>-</Button>
    </div>

    )
  }
})

module.exports = DeltaNumberContainer
