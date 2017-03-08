import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show, idx) => {
          return (
            <ShowCard key={show.imdbID} show={show} />
            )
        })}
      </div>
      )
  }
})
// backtick and $ are like templates, displaying whatever is in {}
export default Search