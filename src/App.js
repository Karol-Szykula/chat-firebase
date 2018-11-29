import React, { Component } from 'react'

import Chat from './Chat/Chat'
import Auth from './Auth/Auth.js'

class App extends Component {
  render() {
    return (
      <div >
        <Auth >
          <Chat />
        </Auth>
      </div>
    )
  }
}

export default App
