import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'dva/router'
import Home from 'src/containers/Home'
import Editor from 'src/containers/Editor'
import Article from 'src/containers/Article'
import Tags from 'src/containers/Tags'
import Profile from 'src/containers/Profile'
import { connect } from 'react-redux'
import Login from 'src/containers/Login'
import NotFound from 'src/containers/NotFound'
import PropTypes from 'prop-types'
@withRouter
@connect()
class App extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
  }
  componentDidMount () {
    this.props.dispatch({
      type: 'init/getAllTags',
    })
    this.props.dispatch({
      type: 'init/getBingImg',
    })
    this.props.dispatch({
      type: 'init/getImageList',
    })
    this.props.dispatch({
      type: 'init/getUserInfo',
    })
  }
  render () {
    const styles = require('./index.scss')
    return (
      <div className={styles.app}>
        <Switch>
          <Redirect from="/" exact to={'/home'} />
          <Route path="/home" component={Home}></Route>
          <Route path="/editor/:id" component={Editor}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/article/:id" component={Article}></Route>
          <Route path="/tags" component={Tags}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App