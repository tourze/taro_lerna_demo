import Taro from '@tarojs/taro';
import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  Taro.showLoading({
    title: '异步加载中',
  });
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
      Taro.hideLoading();
      // Taro.hideLoading();
    }, 2000)
  }
}
