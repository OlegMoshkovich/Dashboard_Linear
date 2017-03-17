var React = require('react');
var PropTypes = React.PropTypes;

var BarComponent = require('../components/A_BarRecharts');
var LineComponent = require('../components/A_LineRecharts');
var PieComponent = require('../components/A_PieChartjs');

var axios = require('axios');

var siteInfoArr = []
var SafetyGroup = []
var PowerElect = []
var Brick = []
var Sons = []
var companies = {}

var DashboardContainer = React.createClass({
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
        })
    },

  render:function(){

  if (this.state.isLoading === false){
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
    })
    companies = {"SafetyGroup":SafetyGroup.length,"PowerElectriciansCo":PowerElect.length,"BrickMortar":Brick.length,"RicksonSons":Sons.length}
  }

    return(
      <div>

      <div>
      <PieComponent
      isLoading ={this.state.isLoading}
      siteInfo={this.state.siteInfo}
      companies = {companies}
      />
      </div>

      <div className = "col-sm-12  text-center" >
      <BarComponent
      isLoading ={this.state.isLoading}
      siteInfo={this.state.siteInfo}
      companies = {companies}
      />
      </div>

      <div className = "col-sm-12  text-center" >
      <LineComponent
      isLoading ={this.state.isLoading}
      siteInfo={this.state.siteInfo}
      companies = {companies}
      />
      </div>

      </div>
    )
  }

})


module.exports = DashboardContainer
