import Taro from '@tarojs/taro';

/**
 * 关闭loading
 */
const hideLoading = () => {
  // TODO 封一层
  return Taro.hideLoading();
};

export default hideLoading;
