import React, { Component } from 'react'

class Content extends React.Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
