import Taro from "@tarojs/taro";

/**
 * 返回上一页
 *
 * @returns {Promise<any>}
 */
const navigateBack = () => {
  // TODO 做一层检测，如果没有上一页的话，就返回首页
  return Taro.navigateBack();
};

export default navigateBack;
