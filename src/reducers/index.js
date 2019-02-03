import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'
import likedImagesReducer from './likedImagesReducer'

const rootReducer = combineReducers({
  images: imagesReducer,
  likedImages: likedImagesReducer
})

export default rootReducer


