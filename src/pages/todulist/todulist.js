import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

import { handleAddNum } from './store/actions/countNum'
// import * as actions from './store/actions/countNum'
// import { handleChange, handleClick, handleDelete } from './store/actions/toduList'
import * as actions1 from './store/actions/toduList'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../../utils/createStore'

console.log(actions1, 'actions1')

class ToduList extends Component {

  // state = {
  //   inputVal: '',
  //   inputValList: ['12'],
  // }

  // state = store.getState()
  
  // componentDidMount () {
  //   console.log(this.state, 'state')
  //   const s = store.subscribe(() => {
  //     this.setState(store.getState())
  //   })
  //   console.log('ssss', s)
  // }

  handleChange = (e) => {
    // let value = e.target.value
    // this.setState(() => {
    //   return {
    //     inputVal: value
    //   }
    // })

    // const action = {
    //   type: 'CHANGE_TYPE',
    //   value: e.target.value
    // };
    // store.dispatch(action)

    this.props.handleChange(e.target.value)
  }

  handleClick = () => {
    const { inputVal } = this.props;
    if(inputVal === '') {
      console.log('请输入内容')
      return ;
    }
    this.props.handleClick(inputVal)

    // const { inputVal } = this.state.todoList;
    // if(inputVal === '') {
    //   console.log('请输入内容')
    //   return ;
    // }
    // const action = {
    //   type: 'CLICK_TYPE',
    //   value: inputVal
    // }
    // store.dispatch(action)

    // this.setState(() => {
    //   return {
    //     inputValList: [ ...inputValList, inputVal ],
    //     inputVal: ''
    //   }
    // })
  }

  handleDelete = (index) => {
    this.props.handleDelete(index)

    // const action = {
    //   type: 'DELETE_TYPE',
    //   value: index
    // }
    // store.dispatch(action)

    // const { inputValList } = this.state;
    // inputValList.splice(index, 1)
    // this.setState(() => {
    //   return {
    //     inputValList
    //   }
    // })
  }

  handleAddNum = () => {
    fetch('http://localhost:3333/', { method: 'GET' }).then(res => console.log)
    // const action = {
    //   type: 'ADDNUM_TYPE',
    // }
    // store.dispatch(action)

    this.props.handleAddNum()
  }

  onKeyup = (e) => {
    if(e.keyCode === 13) {
      this.handleClick()
    }
  }

  render() {
    // const { todoList: { inputVal, inputValList } } = this.state;
    // const { countNum: { num } } = this.state;
    const { inputVal, inputValList, num } = this.props;
    return (
      <>
        <input onKeyUp={this.onKeyup} value={ inputVal } onChange={this.handleChange}/>
        <button onClick={this.handleClick}>点击</button>
        <ul>
          {
            inputValList.map((ele, index) => (
              <li key={index} onClick={() => this.handleDelete(index)}>{ele}</li>
            ))
          }
        </ul>
        <hr></hr>
        { num }
        <div>
          <button onClick={this.handleAddNum}>点击</button>
        </div>
      </>
    )
  }
}

  // const mapStateToProps = (state) => ({
  //   inputVal: state.todoList.inputVal,
  //   inputValList: state.todoList.inputValList,
  //   num: state.countNum.num,
  // })

  const mapStateToProps = (state) => ({
    inputVal: state.todoList.inputVal,
    inputValList: state.todoList.inputValList,
    num: state.countNum.num,
  })

  // const mapDispatchToProps = (dispatch) => ({
  //   handleAddNum: () => dispatch(handleAddNum()),
  //   handleChange: (value) => dispatch(handleChange(value)),
  //   handleClick: (value) => dispatch(handleClick(value)),
  //   handleDelete: (index) => dispatch(handleDelete(index)),
  // })

  const actions = {
    handleAddNum,
    ...actions1
    // handleChange,
    // handleClick,
    // handleDelete,
  }
  
  // 第一个参数，对象actions  第二个dispatch
  const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToduList);