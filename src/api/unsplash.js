import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID 70718001f8d17b1e4898df223e9f9a51a709eccb76a25f21808da1b2f2d0efad'
  }
})