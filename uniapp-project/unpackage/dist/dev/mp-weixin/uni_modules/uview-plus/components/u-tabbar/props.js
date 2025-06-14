"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 当前匹配项的name
    value: {
      type: [String, Number, null],
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.value
    },
    // 是否为iPhoneX留出底部安全距离
    safeAreaInsetBottom: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.safeAreaInsetBottom
    },
    // 是否显示上方边框
    border: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.border
    },
    // 元素层级z-index
    zIndex: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.zIndex
    },
    // 选中标签的颜色
    activeColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.activeColor
    },
    // 未选中标签的颜色
    inactiveColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.inactiveColor
    },
    // 是否固定在底部
    fixed: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.fixed
    },
    // fixed定位固定在底部时，是否生成一个等高元素防止塌陷
    placeholder: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.props.tabbar.placeholder
    }
  }
});
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-tabbar/props.js.map
