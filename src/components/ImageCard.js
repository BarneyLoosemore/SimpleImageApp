import React from 'react'
import { connect } from 'react-redux'

import { likeImage, unlikeImage } from '../actions'


const ImageCard = () => {

  return (
    <div>

    </div>
  )
}

export default connect({ likeImage, unlikeImage })(ImageCard)