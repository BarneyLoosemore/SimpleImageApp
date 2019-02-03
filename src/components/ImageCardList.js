import React from 'react'
import { connect } from 'react-redux'

import ImageCard from './ImageCard'
import { fetchImages } from '../actions'
import './App.css'


class ImageCardList extends React.Component {

  renderImage = (image) => {
    return (
      <div>
        <ImageCard key={image.url} url={image.urls.regular} description={image.description} />
      </div>
    )
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

export default connect(mapStateToProps, { fetchImages })(ImageCardList)