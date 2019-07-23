import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
  render () {
    return(
      <p className="comment">{this.props.commentText}</p>
    )
  }
}

export default Comment;
