import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        hello world
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hasLogin: state.hasLogin
  }
}

export default connect(mapStateToProps)(Home)
