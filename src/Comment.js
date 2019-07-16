// add Comment component here
import React, { Component } from 'react'

export default class Comment extends Component {
  render(){
    const poem= this.props.commentText
    // console.log(this.props);
    return (
    <div className= 'comment'>
    <p> {poem}</p>
    </div>
  )
  }

}
