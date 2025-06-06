"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.show
    },
    // 颜色
    color: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.color
    },
    // 提示文字颜色
    textColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.textColor
    },
    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.vertical
    },
    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.mode
    },
    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.size
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.textSize
    },
    // 文字内容
    text: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.text
    },
    // 动画模式
    timingFunction: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.timingFunction
    },
    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.duration
    },
    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.loadingIcon.inactiveColor
    }
  }
});
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-loading-icon/props.js.map
