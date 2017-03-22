var React = require("react");
var NumberStyle =  require('../styles').number

function A_NumberComponent(props){

return props.isLoading === true
? <div>Loading Total Workers</div>
:<div>
    <div >
      <h3 className= "col-sm-3 " >{props.text}: </h3>
      <h3 className= "col-sm-1 " style = {NumberStyle}>{props.totalWorkers}</h3>
    </div>
</div>
}

module.exports = A_NumberComponent;
