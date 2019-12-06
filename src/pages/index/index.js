import React, { Component } from 'react';
import Header from './header'
import HeaderFix from './header-fix'


import request from '../../utils/fetch';
import Wxconfig from '../../utils/wxshare';
import { Button } from 'antd-mobile'
import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom';

import ToduList from '../todulist/todulist'



class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixInfoArr: [],
    }
  }

  componentDidMount() {
    this.getPurInfo()
    // this.props.history.push('/detail');
    // setTimeout(() =>{
    //   this.props.history.push('/Home');
    // }, 1000)
  }

  async getPurInfo() {
    const { data } = await request('/api/h5_order/get_pur_info', {}, 'post')
    // this.setState({
    //   fixInfoArr: data
    // })
    this.setState((prev, next) => ({
      fixInfoArr: data
    }))
  }

  render() {
    const { fixInfoArr } = this.state;
    // console.log(fixInfoArr)
    const { route } = this.props;
    return (
        <>
          123
          <NavLink to="/detail">detail</NavLink>
          <NavLink to="/home">home</NavLink>
          { renderRoutes(route.routes) }

          <ToduList />
        </>
      )
  }
}

export default Entry;

