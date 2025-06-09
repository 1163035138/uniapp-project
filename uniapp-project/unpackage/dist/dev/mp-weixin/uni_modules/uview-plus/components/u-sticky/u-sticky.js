"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uSticky_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_libs_config_zIndex = require("../../libs/config/zIndex.js");
const _sfc_main = common_vendor.defineComponent({
  name: "u-sticky",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uSticky_props.props],
  data() {
    return {
      cssSticky: false,
      stickyTop: 0,
      elId: uni_modules_uviewPlus_libs_function_index.guid(),
      left: 0,
      width: "auto",
      height: "auto",
      fixed: false
      // js模式时，是否处于吸顶模式
    };
  },
  computed: {
    style() {
      const style = new UTSJSONObject({});
      if (!this.disabled) {
        if (this.cssSticky) {
          style.position = "sticky";
          style.zIndex = this.uZindex;
          style.top = uni_modules_uviewPlus_libs_function_index.addUnit(this.stickyTop);
        } else {
          style.height = this.fixed ? this.height + "px" : "auto";
        }
      } else {
        style.position = "static";
      }
      style.backgroundColor = this.bgColor;
      return uni_modules_uviewPlus_libs_function_index.deepMerge(uni_modules_uviewPlus_libs_function_index.addStyle(this.customStyle), style);
    },
    // 吸顶内容的样式
    stickyContent() {
      const style = new UTSJSONObject({});
      if (!this.cssSticky) {
        style.position = this.fixed ? "fixed" : "static";
        style.top = this.stickyTop + "px";
        style.left = this.left + "px";
        style.width = this.width == "auto" ? "auto" : this.width + "px";
        style.zIndex = this.uZindex;
      }
      return style;
    },
    uZindex() {
      return this.zIndex ? this.zIndex : uni_modules_uviewPlus_libs_config_zIndex.zIndex.sticky;
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    offsetTop(nval = null) {
      this.getStickyTop();
    }
  },
  methods: {
    init() {
      this.getStickyTop();
      this.checkSupportCssSticky();
      if (!this.cssSticky) {
        !this.disabled && this.initObserveContent();
      }
    },
    initObserveContent() {
      this.$uGetRect("#" + this.elId).then((res = null) => {
        this.height = res.height;
        this.left = res.left;
        this.width = res.width;
        this.$nextTick(() => {
          this.observeContent();
        });
      });
    },
    observeContent() {
      this.disconnectObserver("contentObserver");
      const contentObserver = common_vendor.index.createIntersectionObserver(this, {
        // 检测的区间范围
        thresholds: [0.95, 0.98, 1]
      });
      contentObserver.relativeToViewport(new UTSJSONObject({
        top: -this.stickyTop
      }));
      contentObserver.observe(`#${this.elId}`, (res) => {
        this.setFixed(res.boundingClientRect.top);
      });
      this.contentObserver = contentObserver;
    },
    setFixed(top = null) {
      const fixed = top <= this.stickyTop;
      this.fixed = fixed;
    },
    disconnectObserver(observerName = null) {
      const observer = this[observerName];
      observer && observer.disconnect();
    },
    getStickyTop() {
      this.stickyTop = uni_modules_uviewPlus_libs_function_index.getPx(this.offsetTop) + uni_modules_uviewPlus_libs_function_index.getPx(this.customNavHeight);
    },
    checkSupportCssSticky() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        if (uni_modules_uviewPlus_libs_function_index.os() === "android" && Number(uni_modules_uviewPlus_libs_function_index.getDeviceInfo().system) > 8) {
          this.cssSticky = true;
        }
        this.cssSticky = yield this.checkComputedStyle();
        if (uni_modules_uviewPlus_libs_function_index.os() === "ios") {
          this.cssSticky = true;
        }
      });
    },
    // 在APP和微信小程序上，通过uni.createSelectorQuery可以判断是否支持css sticky
    checkComputedStyle() {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this).select(".u-sticky").fields(new UTSJSONObject({
          computedStyle: ["position"]
        })).exec((e) => {
          resolve("sticky" === e[0].position);
        });
      });
    },
    // H5通过创建元素的形式嗅探是否支持css sticky
    // 判断浏览器是否支持sticky属性
    checkCssStickyForH5() {
    }
  },
  beforeUnmount() {
    this.disconnectObserver("contentObserver");
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sei($data.elId, "view"),
    b: common_vendor.s($options.stickyContent),
    c: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    d: common_vendor.s($options.style)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8b303089"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-sticky/u-sticky.js.map
