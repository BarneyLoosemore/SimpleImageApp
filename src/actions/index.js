import unsplash from '../api/unsplash'

export const changeFilter = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    payload: filter
  }
}

export const fetchImages = (currentFilter) => async dispatch => {
  const response = await unsplash.get('/search/photos', {
    params: { query: currentFilter.toLowerCase() }
  })

  dispatch({ type: 'FETCH_IMAGES', payload: response })
}

export const likeImage = (image) => {
  return {
    type: 'LIKE_IMAGE',
    payload: image
  }
}

export const unLikeImage = (image) => {
  return {
    type: 'UNLIKE_IMAGE',
    payload: image
  }
}