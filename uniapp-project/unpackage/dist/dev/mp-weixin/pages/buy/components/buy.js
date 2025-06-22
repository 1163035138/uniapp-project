"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_index_api = require("../../index/api.js");
if (!Array) {
  const _easycom_up_search_1 = common_vendor.resolveComponent("up-search");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_lazy_load_1 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_image_1 = common_vendor.resolveComponent("up-image");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_waterfall_1 = common_vendor.resolveComponent("up-waterfall");
  const _easycom_up_loadmore_1 = common_vendor.resolveComponent("up-loadmore");
  (_easycom_up_search_1 + _easycom_up_tabs_1 + _easycom_up_lazy_load_1 + _easycom_up_image_1 + _easycom_up_icon_1 + _easycom_up_waterfall_1 + _easycom_up_loadmore_1)();
}
const _easycom_up_search = () => "../../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_tabs = () => "../../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
const _easycom_up_lazy_load = () => "../../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_image = () => "../../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_icon = () => "../../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_waterfall = () => "../../../uni_modules/uview-plus/components/u-waterfall/u-waterfall.js";
const _easycom_up_loadmore = () => "../../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_tabs + _easycom_up_lazy_load + _easycom_up_image + _easycom_up_icon + _easycom_up_waterfall + _easycom_up_loadmore)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "buy",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const list1 = common_vendor.reactive([]);
    const flowList = common_vendor.ref([]);
    const loadStatus = common_vendor.ref("loadmore");
    const tabCurrent = common_vendor.ref(0);
    const swiperCurrent = common_vendor.ref(0);
    const pagination = common_vendor.reactive(new UTSJSONObject({
      page: 1,
      pageSize: 10,
      total: 0
    }));
    const fetchTabsData = () => {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          const res = yield pages_index_api.getHomeData();
          if ((res === null || res === void 0 ? null : res.errorCode) === 200) {
            const formattedData = res.data.map((item = null) => {
              return new UTSJSONObject({ name: item.title, company: item.company });
            });
            list1.splice(0, list1.length, ...formattedData);
          }
        } catch (error) {
          common_vendor.index.__f__("error", "at pages/buy/components/buy.uvue:99", "获取标签数据失败", error);
        }
      });
    };
    const fetchFlowData = () => {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
          const params = new UTSJSONObject({
            page: pagination.page,
            pageSize: pagination.pageSize,
            searchValue: searchValue.value,
            company: ((_a = list1[tabCurrent.value]) === null || _a === void 0 ? null : _a.company) || ""
          });
          const res = yield pages_index_api.getHomeWaterfallData(params);
          if ((res === null || res === void 0 ? null : res.errorCode) === 200) {
            pagination.page = res.data.pagination.page;
            pagination.pageSize = res.data.pagination.pageSize;
            pagination.total = res.data.pagination.total;
            if (res.data.pagination.page * res.data.pagination.pageSize >= res.data.pagination.total) {
              flowList.value = [...flowList.value, ...res.data.list];
              loadStatus.value = "nomore";
            } else {
              flowList.value = [...flowList.value, ...res.data.list];
              loadStatus.value = "loadmore";
            }
          }
        } catch (error) {
          common_vendor.index.__f__("error", "at pages/buy/components/buy.uvue:126", "获取瀑布流数据失败", error);
          loadStatus.value = "loadmore";
        } finally {
        }
      });
    };
    const tabsClick = (item = null, index = null) => {
      swiperCurrent.value = index;
    };
    const scrolltolower = () => {
      if (loadStatus.value === "nomore") {
        return null;
      }
      pagination.page++;
      fetchFlowData();
    };
    const changeSwiper = (_a) => {
      var current = _a.detail.current;
      flowList.value = [];
      tabCurrent.value = current;
      swiperCurrent.value = current;
      pagination.page = 1;
      fetchFlowData();
    };
    common_vendor.onMounted(() => {
      fetchTabsData();
      fetchFlowData();
    });
    return (_ctx = null, _cache = null) => {
      const __returned__ = common_vendor.e(new UTSJSONObject({
        a: common_vendor.o(fetchFlowData),
        b: common_vendor.o(($event = null) => {
          return common_vendor.isRef(searchValue) ? searchValue.value = $event : null;
        }),
        c: common_vendor.p(new UTSJSONObject({
          ["show-action"]: false,
          shape: "square",
          modelValue: common_vendor.unref(searchValue)
        })),
        d: common_vendor.unref(list1).length
      }), common_vendor.unref(list1).length ? new UTSJSONObject({
        e: common_vendor.o(tabsClick),
        f: common_vendor.p(new UTSJSONObject({
          list: common_vendor.unref(list1),
          ["active-color"]: "#0AB7B8",
          itemStyle: "",
          current: common_vendor.unref(tabCurrent)
        }))
      }) : new UTSJSONObject({}), {
        g: common_vendor.f(common_vendor.unref(list1), (item = null, index = null, i0 = null) => {
          return {
            a: common_vendor.w((_a, s1 = null, i1 = null) => {
              var leftList = _a.leftList;
              return common_vendor.e(common_vendor.unref(tabCurrent) === index ? {
                a: common_vendor.f(leftList, (item1 = null, index1 = null, i2 = null) => {
                  var _a2;
                  return {
                    a: "9eb3520e-3-" + i0 + "-" + i1 + "-" + i2 + "," + ("9eb3520e-2-" + i0),
                    b: common_vendor.p({
                      threshold: "0",
                      ["border-radius"]: "10",
                      image: (_a2 = item1.photos) === null || _a2 === void 0 ? null : _a2[0],
                      index: index1 + "left",
                      height: "600rpx",
                      ["img-mode"]: "aspectFill"
                    }),
                    c: common_vendor.t(item1.title),
                    d: "9eb3520e-4-" + i0 + "-" + i1 + "-" + i2 + "," + ("9eb3520e-2-" + i0),
                    e: common_vendor.p(new UTSJSONObject({
                      src: item1.avatar,
                      width: "30rpx",
                      height: "30rpx",
                      shape: "circle"
                    })),
                    f: common_vendor.t(item1.nickname),
                    g: "9eb3520e-5-" + i0 + "-" + i1 + "-" + i2 + "," + ("9eb3520e-2-" + i0),
                    h: common_vendor.t(item1.likes),
                    i: index1
                  };
                }),
                b: common_vendor.p(new UTSJSONObject({
                  name: "thumb-up",
                  size: "20"
                }))
              } : new UTSJSONObject({}), new UTSJSONObject({
                c: i1,
                d: s1
              }));
            }, new UTSJSONObject({
              name: "left",
              path: "g[" + i0 + "].a",
              vueId: "9eb3520e-2-" + i0
            })),
            b: common_vendor.unref(tabCurrent) === index,
            c: common_vendor.w((_a, s1 = null, i1 = null) => {
              var rightList = _a.rightList;
              return common_vendor.e(common_vendor.unref(tabCurrent) === index ? {
                a: common_vendor.f(rightList, (item2 = null, index2 = null, i2 = null) => {
                  var _a2;
                  return {
                    a: "9eb3520e-6-" + i0 + "-" + i1 + "-" + i2 + "," + ("9eb3520e-2-" + i0),
                    b: common_vendor.p({
                      threshold: "0",
                      ["border-radius"]: "10",
                      image: (_a2 = item2.photos) === null || _a2 === void 0 ? null : _a2[0],
                      index: index2 + "right",
                      height: "600rpx",
                      ["img-mode"]: "aspectFill"
                    }),
                    c: common_vendor.t(item2.title),
                    d: "9eb3520e-7-" + i0 + "-" + i1 + "-" + i2 + "," + ("9eb3520e-2-" + i0),
                    e: common_vendor.p(new UTSJSONObject({
                      src: item2.avatar,
                      width: "30rpx",
                      height: "30rpx",
                      shape: "circle"
                    })),
                    f: common_vendor.t(item2.nickname),
                    g: "9eb3520e-8-" + i0 + "-" + i1 + "-" + i2 + "," + ("9eb3520e-2-" + i0),
                    h: common_vendor.t(item2.likes),
                    i: index2
                  };
                }),
                b: common_vendor.p(new UTSJSONObject({
                  name: "thumb-up",
                  size: "20"
                }))
              } : new UTSJSONObject({}), new UTSJSONObject({
                c: i1,
                d: s1
              }));
            }, new UTSJSONObject({
              name: "right",
              path: "g[" + i0 + "].c",
              vueId: "9eb3520e-2-" + i0
            })),
            d: common_vendor.unref(tabCurrent) === index,
            e: "9eb3520e-2-" + i0,
            f: common_vendor.o(($event = null) => {
              return common_vendor.isRef(flowList) ? flowList.value = $event : null;
            }, index),
            g: "9eb3520e-9-" + i0,
            h: common_vendor.o(scrolltolower, index),
            i: index,
            j: index.toString()
          };
        }),
        h: common_vendor.p(new UTSJSONObject({
          modelValue: common_vendor.unref(flowList)
        })),
        i: common_vendor.p(new UTSJSONObject({
          status: common_vendor.unref(loadStatus),
          color: "black"
        })),
        j: common_vendor.unref(swiperCurrent),
        k: common_vendor.o(changeSwiper),
        l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
      });
      return __returned__;
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9eb3520e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/buy/components/buy.js.map
