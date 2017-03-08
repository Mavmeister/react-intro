import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1> Meatvids </h1>
        <input type='text' placeholder='Search here...'/>
        <a> or Browse All </a>
      </div>
    )
  }
})

export default Landing