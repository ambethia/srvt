import React, { Component } from 'react'
import { auth } from '../utils/AuthService'
import API from '../utils/API'
export default class Home extends Component {

  updateActivities () {
    if (auth.isSignedIn) {
      API.get('/athlete/activities').then(activities => this.setState({activities}))
    }
  }

  render () {
    return <main>
      <button onClick={() => this.updateActivities()}>See Activities</button>
      <code>
        {JSON.stringify(this.state)}
      </code>
    </main>
  }
}
