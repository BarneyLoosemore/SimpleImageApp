import React from 'react'
import { connect } from 'react-redux'

import ImageCard from './ImageCard'
import { fetchImages, likeImage, unlikeImage } from '../actions'
import './App.css'


class ImageCardList extends React.Component {

  renderImage = (image) => {
    return (
      <div>
        <ImageCard 
          id={image.id} 
          url={image.urls.regular} 
          description={image.description} 
          likeImage = {this.likeImage}
          unlikeImage = {this.unlikeImage}
        />
      </div>
    )
  }

  likeImage = (imageId) => {
    const image = this.props.images.filter(image => image.id === imageId)
    this.props.likeImage(image)
  }

  unlikeImage = (imageId) => {
    const image = this.props.images.filter(image => image.id === imageId)
    this.props.unlikeImage(image)
  }

  render(){
    return (
      <div className="image-container">
        {
          this.props.images.map(image => this.renderImage(image))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    likedImages: state.likedImages
  }
}

export default connect(mapStateToProps, { fetchImages, likeImage, unlikeImage })(ImageCardList)