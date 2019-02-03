import React from 'react'
import { connect } from 'react-redux'

import { likeImage, unlikeImage } from '../actions'


const ImageCard = (props) => {

  return (
    <div>
      <img src={props.url} alt={props.description}></img>
      {props.description}
    </div>
  )
}

export default connect(null, { likeImage, unlikeImage })(ImageCard)