

const likedImagesReducer = (state = [], action) => {

  switch (action.type) {
    case 'LIKE_IMAGE':
      return {...state, likedImages: [...state.likedImages, action.payload]}
    case 'UNLIKE_IMAGE':
      return {...state, likedImages: state.likedImages.filter(image => image !== action.payload)}
    default:
      return state
  }
}

export default likedImagesReducer