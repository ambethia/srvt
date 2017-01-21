import React, { Component, PropTypes as T } from 'react'
import { SignInButton } from '.'

export default class Layout extends Component {

  static propTypes = {
    children: T.element
  }

  render () {
    return <div>
      <nav>
        <SignInButton />
      </nav>
      {this.props.children}
    </div>
  }
}
