"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    bgColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.props.statusBar.bgColor
    },
    // 状态栏获取得高度
    height: {
      type: Number,
      default: () => uni_modules_uviewPlus_libs_config_props.props.statusBar.height
    }
  }
});
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-status-bar/props.js.map
