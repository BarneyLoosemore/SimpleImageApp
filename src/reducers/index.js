import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'
import likedImagesReducer from './likedImagesReducer'
import filterReducer from './filterReducer'


const rootReducer = combineReducers({
  images: imagesReducer,
  likedImages: likedImagesReducer
  // ,
  // filter: filterReducer
})

export default rootReducer


