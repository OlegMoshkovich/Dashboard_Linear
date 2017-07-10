var NumberComponent = require('../components/Device');

import React, { PropTypes } from 'react'
import axios from 'axios'



var Device = React.createClass({
  getInitialState:function(){
  return{
    isLoading:true,
    tagData:[]
    }
  },

  componentDidMount:function(){
      axios.get('https://93afda47-5afd-4fea-8485-afb56e47e529-bluemix.cloudant.com/iotp_ykq7wp_protopilot_2017-04-06/_all_docs')
        .then(function (response) {
          response.data.map(function(worker){
            })
          this.setState({
            isLoading:false,
            tagData:response.data
          })
      }.bind(this))
        .catch(function (error) {
          console.log(error);
        })
    },

  render:function(){
  if (this.state.isLoading === false){
        }

    return(
      <div>
          <NumberComponent
          isLoading ={this.state.isLoading}
          siteInfo={this.state.tagData}
          />
      </div>
    )
  }
})

module.exports = Device
