import React from 'react'

import SearchBar from './SearchBar'
import NavBar from './NavBar'
import ImageCardList from './ImageCardList'
// import LikedImageCardList from './LikedImageCardList'


class App extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <SearchBar /> 
        <ImageCardList />
      </div>
    )
  }
}

export default App