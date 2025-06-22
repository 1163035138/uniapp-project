import { api } from "@/store/globalVariable";

export const getHomeData = async () => {
  const res = await uni.request({
    url: `${api.value}/wechat-mini-program/getHomeTabsData`,
    method: "get",
  });
  if (res.data.errorCode === 200) {
    return res.data;
  }
};
export const getHomeWaterfallData = async (data:any) => {
  const res = await uni.request({
    url: `${api.value}/wechat-mini-program/getHomeWaterfallData`,
    method: "post",
    data: data
  });
  if (res.data.errorCode === 200) {
    return res.data;
  }
};
