import React from 'react'
import { connect } from 'react-redux'

import './App.css'


class ImageCard extends React.Component {

  state = {
    liked: false
  }

  handleLikeClicked = () => {
    this.state.liked ? this.props.unlikeImage(this.props.id) : this.props.likeImage(this.props.id)
    this.setState({ liked: !this.state.liked })
  }

  render(){
    return (
      <div>
        <img 
          className="image" 
          src={this.props.url} 
          alt={this.props.description} 
          onClick={() => this.handleLikeClicked()} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    likedImages: state.likedImages,
    image: state.images
  }
}

export default connect(mapStateToProps)(ImageCard)