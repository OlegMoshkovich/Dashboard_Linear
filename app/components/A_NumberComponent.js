var React = require("react");

var Alert = require('react-bootstrap').Alert;

import Styles from '../styles';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';


function A_NumberComponent(props){

return props.isLoading === true
? <div>Loading Total Workers</div>
:<div>
    <div >
      <h3  >{props.text}: </h3>
      <h3  style = {Styles.number} >{props.totalWorkers}</h3>
    </div>

    <Button bsStyle="primary" bsSize="large">Large button</Button>



</div>

}

module.exports = A_NumberComponent;
