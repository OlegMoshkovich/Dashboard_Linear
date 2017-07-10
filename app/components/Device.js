var React = require("react");

var Alert = require('react-bootstrap').Alert;

import Styles from '../styles';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

function displayData(array){
  return <pre>{JSON.stringify(array,null,' ')}</pre>
}


function Device(props){

return props.isLoading === true
? <div>Loading Device Data</div>
:<div>
    <div>{displayData(props.tagData)}
    </div>





</div>

}

module.exports = Device;
