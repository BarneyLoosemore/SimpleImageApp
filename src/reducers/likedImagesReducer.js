

const likedImagesReducer = (state = [], action) => {

  switch (action.type) {
    case 'LIKE_IMAGE':
      return [...state, action.payload]
    case 'UNLIKE_IMAGE':
      console.log(action.payload.id)
      return state.filter(image => image[0].id !== action.payload[0].id)
    default:
      return state
  }
}

export default likedImagesReducer