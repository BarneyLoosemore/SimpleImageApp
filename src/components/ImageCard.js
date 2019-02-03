import React from 'react'
import { connect } from 'react-redux'

import { likeImage, unlikeImage } from '../actions'
import './App.css'


const ImageCard = (props) => {

  return (
    <div>
      <img className="image" src={props.url} alt={props.description}></img>
    </div>
  )
}

export default connect(null, { likeImage, unlikeImage })(ImageCard)