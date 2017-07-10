import React, { PropTypes } from 'react'
import DeltaNumberComponent  from '../components/A_DeltaNumberComponent'
import Button from 'react-bootstrap/lib/Button'


const text = "SafeScore"
let previousCount = 0

const DeltaNumberContainer = React.createClass({
  getInitialState(){
  return{
    isLoading:false,
    delta:true,
    count:0
    }
  },

  increaseCount (e) {
    let currentCount = this.state.count;
    const deltaCount = currentCount - previousCount;

    if (deltaCount>0){
      this.state.delta = true
    }
    currentCount += 1;

    this.setState({
    count: currentCount});
    previousCount = this.state.count;
   },

   decreaseCount (e) {
     let currentCount = this.state.count;
     const deltaCount = currentCount-previousCount;

     if (deltaCount<= 0){
       this.state.delta = false
     }
     currentCount -= 1;

     this.setState({
      count: currentCount});
      previousCount = this.state.count;
    },

   render (){

    return(
      <div>
          <DeltaNumberComponent
          isLoading ={this.state.isLoading}
          text = {text}
          count = {this.state.count}
          delta = {this.state.delta}
          />
          <p/>
          <Button  onClick = {this.increaseCount}>+</Button>
          <Button  onClick = {this.decreaseCount}>-</Button>
    </div>
    )
  }
})


export default DeltaNumberContainer
