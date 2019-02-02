import React from 'react'
import { connect } from 'react-redux'

import ImageCard from './ImageCard'
import { fetchImages } from '../actions'


class ImageCardList extends React.Component {
  
  componentDidMount(){
    this.props.fetchImages()
  }

  render(){
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    images: state.images,
    likedImages: state.likedImages,
    filter: state.filter
  }
}

export default connect(mapStateToProps, { fetchImages })(ImageCardList)