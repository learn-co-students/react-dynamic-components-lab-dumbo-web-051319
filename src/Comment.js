import React from 'react';


class Comment extends React.Component{
  render() {
    console.log(this.props)
    return(
      <div className="comment">{this.props.commentText}</div>
    )
  }



}
export default Comment;
