"use strict";
const common_vendor = require("../../common/vendor.js");
const state = common_vendor.reactive(new UTSJSONObject({ activeTab: 0 }));
const setActiveTab = (num = null) => {
  state.activeTab = num;
};
exports.setActiveTab = setActiveTab;
exports.state = state;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/home/index.js.map
