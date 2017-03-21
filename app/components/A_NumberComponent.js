var React = require("react");
var NumberStyle =  require('../styles').number

function A_NumberComponent(props){
var TotalWorkers = props.companies.SafetyGroup+props.companies.PowerElectriciansCo+props.companies.BrickMortar+props.companies.RicksonSons;

return props.isLoading === true
? <div>Loading Total Workers</div>
:<div>
    <div >
      <h3 className= "col-sm-3 " >{props.text}: </h3>
      <h3 className= "col-sm-1 " style = {NumberStyle}>{TotalWorkers}</h3>
    </div>
</div>
}

module.exports = A_NumberComponent;
