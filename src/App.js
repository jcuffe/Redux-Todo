import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './components/TodoList'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}
App.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ todos: state })
export default connect(mapStateToProps)(App)
