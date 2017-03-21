var React = require('react');
// var RechartsTest = require('../components/RechartsTest')
var PropTypes = React.PropTypes
var axios = require('axios')
var siteInfoArr = []
var SafetyGroup = []
var PowerElect = []
var Brick = []
var Sons = []

var WorkerInfo = React.createClass({
  getInitialState:function(){
  return{
    isLoading:true,
    siteInfo:[]
    }
  },

  componentDidMount:function(){
      axios.get('https://sheetsu.com/apis/v1.0/1674c443ae00')
        .then(function (response) {
          response.data.map(function(worker){
            worker.Age = Number(worker.Age)
            worker.Experience = Number(worker.Experience)
            })
          this.setState({
            isLoading:false,
            siteInfo:response.data
          })
      }.bind(this))
        .catch(function (error) {
          console.log(error);
        });

        siteInfoArr = this.state.siteInfo,
        SafetyGroup = siteInfoArr.filter(function(worker){
        return  worker.Group === "Safety Group"
        }),
        PowerElect = siteInfoArr.filter(function(worker){
        return  worker.Group === "Power Electricians Co."
        }),
        Brick = siteInfoArr.filter(function(worker){
        return  worker.Group === "Brick & Mortar"
        }),
        Sons = siteInfoArr.filter(function(worker){
        return  worker.Group === "Rickson & Sons"
        }),
        console.log(Sons.length)

    },

  render:function(){
    return(
      <RechartsTest
        siteInfo = {this.state.siteInfo}
        isLoading ={this.state.isLoading}
        />
    )
  }

})

module.exports = WorkerInfo
