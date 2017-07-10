var React = require('react');
var PropTypes = React.PropTypes;
var NumberComponent = require('../components/A_NumberComponent');
var axios = require('axios');
var text = "Total Workers on Site";



var NumberContainer = React.createClass({
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
            })
          this.setState({
            isLoading:false,
            siteInfo:response.data
          })
      }.bind(this))
        .catch(function (error) {
          console.log(error);
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


  render:function(){
  if (this.state.isLoading === false){
      var totalWorkers = this.workerTotal(this.state.siteInfo).totalWorkers
        }

    return(
      <div>
          <NumberComponent
          isLoading ={this.state.isLoading}
          siteInfo={this.state.siteInfo}
          totalWorkers = {totalWorkers}
          text = {text}
          />
      </div>
    )
  }
})

module.exports = NumberContainer
