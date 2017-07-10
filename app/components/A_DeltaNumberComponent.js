import React from "react"
import Styles from '../styles';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';


function DeltaNumberComponent(props){

return props.isLoading === true
? <div>Loading Total Workers</div>
:<div>

<div style = {Styles.parent}>
      <h3  style={ Styles.childText}>{props.text}: </h3>
      <div style = { Styles.childNumber}>{props.count}</div>
      <div style = { Styles.childArrow}>
        {props.delta  === true && <div style = {Styles.up}><Glyphicon glyph="arrow-up" /></div>}
        {props.delta === false && <div style = {Styles.down}><Glyphicon glyph="arrow-down" /></div>}
      </div>
</div>


</div>

console.log(delta)
}

export default DeltaNumberComponent;
