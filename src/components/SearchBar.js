import React from 'react'
import { connect } from 'react-redux'

import { fetchImages } from '../actions'
 

class SearchBar extends React.Component {

  state = {
    filter: ''
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchImages(this.state.filter)
  }

  render(){
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)} >
          <input onChange={e => this.handleChange(e)} />
        </form>
      </div>
    )
  }
}


export default connect(null, { fetchImages })(SearchBar)