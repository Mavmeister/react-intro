import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1> Meatvids </h1>
        <input type='text' placeholder='Search here...'/>
        <Link to='/search'> or Browse All </Link>
      </div>
    )
  }
})

export default Landing