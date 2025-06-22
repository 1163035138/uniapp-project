"use strict";
const common_vendor = require("../../common/vendor.js");
const store_globalVariable_index = require("../../store/globalVariable/index.js");
const getHomeData = () => {
  return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
    const res = yield common_vendor.index.request({
      url: `${store_globalVariable_index.api.value}/wechat-mini-program/getHomeTabsData`,
      method: "get"
    });
    if (res.data.errorCode === 200) {
      return res.data;
    }
  });
};
const getHomeWaterfallData = (data) => {
  return common_vendor.__awaiter(void 0, void 0, void 0, function* () {
    const res = yield common_vendor.index.request({
      url: `${store_globalVariable_index.api.value}/wechat-mini-program/getHomeWaterfallData`,
      method: "post",
      data
    });
    if (res.data.errorCode === 200) {
      return res.data;
    }
  });
};
exports.getHomeData = getHomeData;
exports.getHomeWaterfallData = getHomeWaterfallData;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/api.js.map
