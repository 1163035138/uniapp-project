"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uDatetimePicker_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
function times(n = null, iteratee = null) {
  let index = -1;
  const result = Array(n < 0 ? 0 : n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
const _sfc_main = common_vendor.defineComponent({
  name: "up-datetime-picker",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uDatetimePicker_props.props],
  data() {
    return {
      // 原来的日期选择器不方便，这里增加一个hasInput选项支持类似element的自带输入框的功能。
      inputValue: "",
      showByClickInput: false,
      columns: [],
      innerDefaultIndex: [],
      innerFormatter: (type = null, value = null) => {
        return value;
      }
    };
  },
  watch: {
    show(newValue = null, oldValue = null) {
      if (newValue) {
        this.updateColumnValue(this.innerValue);
      }
    },
    modelValue(newValue = null) {
      this.init();
    },
    propsChange() {
      this.init();
    }
  },
  computed: {
    // 如果以下这些变量发生了变化，意味着需要重新初始化各列的值
    propsChange() {
      return [this.mode, this.maxDate, this.minDate, this.minHour, this.maxHour, this.minMinute, this.maxMinute, this.filter, this.modelValue];
    },
    // input的props
    inputPropsInner() {
      return Object.assign({ border: this.inputBorder, placeholder: this.placeholder, disabled: this.disabled, disabledColor: this.disabledColor }, this.inputProps);
    }
  },
  mounted() {
    this.init();
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  methods: {
    getInputValue(newValue = null) {
      if (newValue == "" || !newValue || newValue == void 0) {
        this.inputValue = "";
        return null;
      }
      if (this.mode == "time") {
        this.inputValue = newValue;
      } else {
        if (this.format) {
          this.inputValue = common_vendor.dayjs(newValue).format(this.format);
        } else {
          let format = "";
          switch (this.mode) {
            case "date":
              format = "YYYY-MM-DD";
              break;
            case "year-month":
              format = "YYYY-MM";
              break;
            case "datetime":
              format = "YYYY-MM-DD HH:mm";
              break;
            case "time":
              format = "HH:mm";
              break;
          }
          this.inputValue = common_vendor.dayjs(newValue).format(format);
        }
      }
    },
    init() {
      this.innerValue = this.correctValue(this.modelValue);
      this.updateColumnValue(this.innerValue);
      this.getInputValue(this.innerValue);
    },
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e = null) {
      this.innerFormatter = e;
    },
    // 关闭选择器
    close() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      if (this.hasInput) {
        this.showByClickInput = false;
      }
      this.$emit("cancel");
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit("update:modelValue", this.innerValue);
      if (this.hasInput) {
        this.getInputValue(this.innerValue);
        this.showByClickInput = false;
      }
      this.$emit("confirm", new UTSJSONObject({
        value: this.innerValue,
        mode: this.mode
      }));
    },
    //用正则截取输出值,当出现多组数字时,抛出错误
    intercept(e = null, type = null) {
      let judge = e.match(/\d+/g);
      if (judge.length > 1) {
        uni_modules_uviewPlus_libs_function_index.error("请勿在过滤或格式化函数时添加数字");
        return 0;
      } else if (type && judge[0].length == 4) {
        return judge[0];
      } else if (judge[0].length > 2) {
        uni_modules_uviewPlus_libs_function_index.error("请勿在过滤或格式化函数时添加数字");
        return 0;
      } else {
        return judge[0];
      }
    },
    // 列发生变化时触发
    change(e = null) {
      const indexs = e.indexs, values = e.values;
      let selectValue = "";
      if (this.mode === "time") {
        selectValue = `${this.intercept(values[0][indexs[0]])}:${this.intercept(values[1][indexs[1]])}`;
      } else {
        const year = parseInt(this.intercept(values[0][indexs[0]], "year"));
        const month = parseInt(this.intercept(values[1][indexs[1]]));
        let date = parseInt(values[2] ? this.intercept(values[2][indexs[2]]) : 1);
        let hour = 0, minute = 0;
        const maxDate = common_vendor.dayjs(`${year}-${month}`).daysInMonth();
        if (this.mode === "year-month") {
          date = 1;
        }
        date = Math.min(maxDate, date);
        if (this.mode === "datetime") {
          hour = parseInt(this.intercept(values[3][indexs[3]]));
          minute = parseInt(this.intercept(values[4][indexs[4]]));
        }
        selectValue = Number(new Date(year, month - 1, date, hour, minute));
      }
      selectValue = this.correctValue(selectValue);
      this.innerValue = selectValue;
      this.updateColumnValue(selectValue);
      this.$emit("change", new UTSJSONObject({
        value: selectValue,
        mode: this.mode
      }));
    },
    // 更新各列的值，进行补0、格式化等操作
    updateColumnValue(value = null) {
      this.innerValue = value;
      this.updateColumns();
      setTimeout(() => {
        this.updateIndexs(value);
      }, 0);
    },
    // 更新索引
    updateIndexs(value = null) {
      let values = [];
      const formatter = this.formatter || this.innerFormatter;
      if (this.mode === "time") {
        const timeArr = value.split(":");
        values = [formatter("hour", timeArr[0]), formatter("minute", timeArr[1])];
      } else {
        values = [
          formatter("year", `${common_vendor.dayjs(value).year()}`),
          // 月份补0
          formatter("month", uni_modules_uviewPlus_libs_function_index.padZero(common_vendor.dayjs(value).month() + 1))
        ];
        if (this.mode === "date") {
          values.push(formatter("day", uni_modules_uviewPlus_libs_function_index.padZero(common_vendor.dayjs(value).date())));
        }
        if (this.mode === "datetime") {
          values.push(formatter("day", uni_modules_uviewPlus_libs_function_index.padZero(common_vendor.dayjs(value).date())), formatter("hour", uni_modules_uviewPlus_libs_function_index.padZero(common_vendor.dayjs(value).hour())), formatter("minute", uni_modules_uviewPlus_libs_function_index.padZero(common_vendor.dayjs(value).minute())));
        }
      }
      const indexs = this.columns.map((column, index) => {
        return Math.max(0, column.findIndex((item = null) => {
          return item === values[index];
        }));
      });
      this.innerDefaultIndex = indexs;
    },
    // 更新各列的值
    updateColumns() {
      const formatter = this.formatter || this.innerFormatter;
      const results = this.getOriginColumns().map((column) => {
        return column.values.map((value = null) => {
          return formatter(column.type, value);
        });
      });
      this.columns = results;
    },
    getOriginColumns() {
      const results = this.getRanges().map((_a) => {
        var type = _a.type, range = _a.range;
        let values = times(range[1] - range[0] + 1, (index = null) => {
          let value = range[0] + index;
          value = type === "year" ? `${value}` : uni_modules_uviewPlus_libs_function_index.padZero(value);
          return value;
        });
        if (this.filter) {
          values = this.filter(type, values);
          if (!values || values && values.length == 0) {
            common_vendor.index.__f__("log", "at uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.vue:356", "日期filter结果不能为空");
          }
        }
        return new UTSJSONObject({ type, values });
      });
      return results;
    },
    // 通过最大值和最小值生成数组
    generateArray(start = null, end = null) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    // 得出合法的时间
    correctValue(value = null) {
      const isDateMode = this.mode !== "time";
      if (isDateMode && !common_vendor.dayjs.unix(value).isValid()) {
        value = this.minDate;
      } else if (!isDateMode && !value) {
        value = `${uni_modules_uviewPlus_libs_function_index.padZero(this.minHour)}:${uni_modules_uviewPlus_libs_function_index.padZero(this.minMinute)}`;
      }
      if (!isDateMode) {
        if (String(value).indexOf(":") === -1)
          return uni_modules_uviewPlus_libs_function_index.error("时间错误，请传递如12:24的格式");
        let _a = common_vendor.__read(value.split(":"), 2), hour = _a[0], minute = _a[1];
        hour = uni_modules_uviewPlus_libs_function_index.padZero(uni_modules_uviewPlus_libs_function_index.range(this.minHour, this.maxHour, Number(hour)));
        minute = uni_modules_uviewPlus_libs_function_index.padZero(uni_modules_uviewPlus_libs_function_index.range(this.minMinute, this.maxMinute, Number(minute)));
        return `${hour}:${minute}`;
      } else {
        value = common_vendor.dayjs(value).isBefore(common_vendor.dayjs(this.minDate)) ? this.minDate : value;
        value = common_vendor.dayjs(value).isAfter(common_vendor.dayjs(this.maxDate)) ? this.maxDate : value;
        return value;
      }
    },
    // 获取每列的最大和最小值
    getRanges() {
      if (this.mode === "time") {
        return [
          new UTSJSONObject({
            type: "hour",
            range: [this.minHour, this.maxHour]
          }),
          new UTSJSONObject({
            type: "minute",
            range: [this.minMinute, this.maxMinute]
          })
        ];
      }
      const _a = this.getBoundary("max", this.innerValue), maxYear = _a.maxYear, maxDate = _a.maxDate, maxMonth = _a.maxMonth, maxHour = _a.maxHour, maxMinute = _a.maxMinute;
      const _b = this.getBoundary("min", this.innerValue), minYear = _b.minYear, minDate = _b.minDate, minMonth = _b.minMonth, minHour = _b.minHour, minMinute = _b.minMinute;
      const result = [
        new UTSJSONObject({
          type: "year",
          range: [minYear, maxYear]
        }),
        new UTSJSONObject({
          type: "month",
          range: [minMonth, maxMonth]
        }),
        new UTSJSONObject({
          type: "day",
          range: [minDate, maxDate]
        }),
        new UTSJSONObject({
          type: "hour",
          range: [minHour, maxHour]
        }),
        new UTSJSONObject({
          type: "minute",
          range: [minMinute, maxMinute]
        })
      ];
      if (this.mode === "date")
        result.splice(3, 2);
      if (this.mode === "year-month")
        result.splice(2, 3);
      return result;
    },
    // 根据minDate、maxDate、minHour、maxHour等边界值，判断各列的开始和结束边界值
    getBoundary(type = null, innerValue = null) {
      let value = new Date(innerValue);
      if (isNaN(value.getTime())) {
        value = /* @__PURE__ */ new Date();
      }
      const boundary = new Date(this[`${type}Date`]);
      const year = common_vendor.dayjs(boundary).year();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;
      if (type === "max") {
        month = 12;
        date = common_vendor.dayjs(value).daysInMonth();
        hour = 23;
        minute = 59;
      }
      if (common_vendor.dayjs(value).year() === year) {
        month = common_vendor.dayjs(boundary).month() + 1;
        if (common_vendor.dayjs(value).month() + 1 === month) {
          date = common_vendor.dayjs(boundary).date();
          if (common_vendor.dayjs(value).date() === date) {
            hour = common_vendor.dayjs(boundary).hour();
            if (common_vendor.dayjs(value).hour() === hour) {
              minute = common_vendor.dayjs(boundary).minute();
            }
          }
        }
      }
      return new UTSJSONObject({
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute
      });
    },
    onShowByClickInput() {
      if (!this.disabled) {
        this.showByClickInput = !this.showByClickInput;
      }
    }
  }
});
if (!Array) {
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_up_input2 + _easycom_u_picker2)();
}
const _easycom_up_input = () => "../u-input/u-input.js";
const _easycom_u_picker = () => "../u-picker/u-picker.js";
if (!Math) {
  (_easycom_up_input + _easycom_u_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.hasInput
  }, _ctx.hasInput ? {
    b: common_vendor.o(($event) => $data.inputValue = $event),
    c: common_vendor.p({
      readonly: !!$data.showByClickInput,
      ...$options.inputPropsInner,
      modelValue: $data.inputValue
    }),
    d: common_vendor.r("trigger", {
      value: $data.inputValue
    }),
    e: common_vendor.o((...args) => $options.onShowByClickInput && $options.onShowByClickInput(...args))
  } : {}, {
    f: common_vendor.sr("picker", "e7a0f1eb-1"),
    g: common_vendor.o($options.close),
    h: common_vendor.o($options.cancel),
    i: common_vendor.o($options.confirm),
    j: common_vendor.o($options.change),
    k: common_vendor.p({
      show: _ctx.show || _ctx.hasInput && $data.showByClickInput,
      popupMode: _ctx.popupMode,
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      columns: $data.columns,
      title: _ctx.title,
      itemHeight: _ctx.itemHeight,
      showToolbar: _ctx.showToolbar,
      visibleItemCount: _ctx.visibleItemCount,
      defaultIndex: $data.innerDefaultIndex,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      toolbarRightSlot: _ctx.toolbarRightSlot
    }),
    l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e7a0f1eb"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-datetime-picker/u-datetime-picker.js.map
