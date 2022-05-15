<template>
  <view class="logistics" :class="{white: isDetail}">
    <view class="item mr">
      <uni-icons custom-prefix="iconfont" type="icon-wuliuxinxi" color="#40AE36" size="30"/>
      <view class="msg">
        <view class="dot">[广州市] [白云区-长腰岭], 下一站</view>
        <view class="time">2022.5.11 22:17:54</view>
      </view>
      <uni-icons v-if="!isDetail" custom-prefix="iconfont" type="icon-Right" color="#666666" size="15"/>
    </view>
    <view class="item" v-if="isDetail">
      <uni-icons custom-prefix="iconfont" type="icon-dingxiang" color="#40AE36" size="30"/>
      <view class="msg">
        <view class="dot bold">佛山市， 北滘镇， xx路，顺威隆汽配 </view>
        <view class="time">丢丢 15800000000</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  isDetail: {
    type: Boolean,
    default: false,
  }
})
</script>


<style lang="scss" scoped>

.time {
  font-size: map-get($map: $font-sizes, $key: default);
  color: map-get($map: $font-colors, $key: gray);
}

.logistics {
  background: $bg-gray;
  padding: $commonPadding;
  border-radius: $borderRadius;
  margin-bottom: $commonPadding;
}
.white {
  background: #fff;
}

.item {
  display: flex;
}

.mr {
  margin-bottom: 30rpx;
}

.msg {
  flex: 1;
  overflow: hidden;
  padding: 0 $commonPadding;
}

.dot {
  height: 40rpx;
  line-height: 40rpx;
  margin-bottom: 15rpx;
}

.bold {
  font-weight: 600;
}
</style>
