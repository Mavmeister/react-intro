import React from 'react'
import { render } from 'react-dom'
// react-dom has a lot of functions, but we only want the render function - eliminates dead code!
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import '../public/normalize.css'
import '../public/style.css'

// BrowserRouter, Match are higher order components 
// BrowserRouter is root component, with everything inside being displayed
// Match says when url matches '/' exactly, display component={Landing}

const App = React.createClass({
    render () {
        return (
          <BrowserRouter>
            <div className='app'>
              <Match exactly pattern='/' component={Landing} />
              <Match exactly pattern='/search' component={Search} />
            </div>
          </BrowserRouter>
        )
    }
})

render(<App />, document.getElementById('app'))
