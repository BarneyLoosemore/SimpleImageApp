import unsplash from '../api/unsplash'

export const fetchImages = (filter='') => async dispatch => {
  const response = await unsplash.get('/search/photos', {
    params: { query: filter.toLowerCase() }
  })

  dispatch({ type: 'FETCH_IMAGES', payload: response.data.results })
}

export const likeImage = (image) => {
  return {
    type: 'LIKE_IMAGE',
    payload: image
  }
}

export const unlikeImage = (image) => {
  return {
    type: 'UNLIKE_IMAGE',
    payload: image
  }
}