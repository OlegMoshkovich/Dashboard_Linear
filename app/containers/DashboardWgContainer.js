var React = require('react');
var PropTypes = React.PropTypes;

var BarComponentMotions = require('../components/A_BarRecharts_Motions');
var BarComponentEvents = require('../components/A_BarRecharts_Events');
var BarComponentCritical = require('../components/A_BarRecharts_Critical');
var BarComponentTotal = require('../components/A_BarRecharts_Total');
var BarComponentRisk = require('../components/A_BarRecharts_Risk');
var BarComponentStacked = require('../components/A_BarRecharts_Stacked');
var LineComponentRisk = require('../components/A_LineRecharts_Risk');


var axios = require('axios');

var siteInfoArr = []
var siteInfoArrNew = []
var riskLevel = []
var lowRiskLevel = []

var title = {}
var i;


var DashboardContainer = React.createClass({
  getInitialState:function(){
  return{
    isLoading:true,
    siteInfo:[]
    }
  },

  componentDidMount:function(){

      axios.get('	https://sheetsu.com/apis/v1.0/04d703afe90a')
        .then(function (response) {
           console.log(response);
            response.data.map(function(worker){
            worker.Bends = Number(worker.Bends)
            worker.Squats = Number(worker.Squats)
            worker.Twists = Number(worker.Twists)
            worker.Jumps = Number(worker.Jumps)
            worker.Reaches = Number(worker.Reaches)
            worker.Falls = Number(worker.Falls)
            worker.StruckBy = Number(worker.StruckBy)
            worker.Trips = Number(worker.Trips)
            worker.Slips = Number(worker.Slips)
            worker.EmergencyAlert = Number(worker.EmergencyAlert)
            worker.SafetyAlert = Number(worker.SafetyAlert)
            worker.RiskLevel = Number(worker.RiskLevel)
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
    siteInfoArr = this.state.siteInfo;

    for (i = 0; i < 50; i++){
      siteInfoArrNew.push(siteInfoArr[i])
    }

    for (i = 0; i < 10; i++){
      riskLevel.push(siteInfoArr[i])
    }

    for (i = 39; i < 50; i++){
      lowRiskLevel.push(siteInfoArr[i])
    }

    lowRiskLevel.reverse()


    }

    return(
      <div>



      <div className = "col-sm-12 text-center" >
      <BarComponentCritical
      isLoading ={this.state.isLoading}
      siteInfo={siteInfoArrNew}

      />
      </div>

      <div className = "col-sm-12 text-center" >
      <LineComponentRisk
      isLoading ={this.state.isLoading}
      siteInfo={siteInfoArrNew}
      />
      </div>

      <div className = "col-sm-12 text-center" >
      <BarComponentEvents
      isLoading ={this.state.isLoading}
      siteInfo={siteInfoArrNew}

      />
      </div>

      <div className = "col-sm-12 text-center" >
      <BarComponentMotions
      isLoading ={this.state.isLoading}
      siteInfo={siteInfoArrNew}

      />
      </div>
      <div className = "col-sm-12 text-center" >
      <BarComponentStacked
      isLoading ={this.state.isLoading}
      siteInfo={siteInfoArrNew}

      title = {"Stacked Event + Motions"}
      />
      </div>





      <div className = "col-sm-12 text-center" >
      <BarComponentTotal
      isLoading ={this.state.isLoading}
      siteInfo={lowRiskLevel}

      title = {"Low Risk Profiles"}
      />
      </div>



      <div className = "col-sm-12 text-center" >
      <BarComponentTotal
      isLoading ={this.state.isLoading}
      siteInfo={riskLevel}

      title = {"High Risk Profiles"}
      />
      </div>

      </div>
    )
  }

})


module.exports = DashboardContainer
