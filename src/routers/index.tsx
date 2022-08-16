import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Layout from '../layout/index';
import LayoutBasic from '../layout-basic/index';
import index from '../pages/Index/index';
import websocket from '../pages/websocket/index';
import list from "../pages/list"
import testcss from "../pages/testcss"
import login from "../pages/login"
// import test from '../views/Test/index';
// import result from '../views/Result/index';
const ROUTE_PREFIX="/"
export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route   
        path="" 
        component={(props:any)=> (
        <Switch>
            <Route path="/login" exact component={login}/>
            <Layout {...props}>
              <Route path="/" exact component={index}/>
              <Route path="/wss" exact component={websocket}/>
              <Route path="/list" exact component={list}/>
              <Route path="/testcss" exact component={testcss}/>
            </Layout>
       </Switch>
      )}/>
      </BrowserRouter>
    );
  }
}
