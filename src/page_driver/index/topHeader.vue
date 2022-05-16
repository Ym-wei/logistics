<template>
  <view class="top-header">
    <view class="address dot">
      <text class="text">广深线/0314</text>
    </view>
    <text class="name">刘德华</text>
    <view>订单: <text class="active">6</text>/14</view>
  </view>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.top-header {
  display: flex;
  align-items: baseline;
  font-size: map-get($map: $font-sizes, $key: default);
  color: map-get($map: $font-colors, $key: gray);
  padding-bottom: 20rpx;
  border-bottom: 2rpx solid $border-color;
}

.address {
  flex: 1;
  overflow: hidden;

  .text {
    display: inline-block;
    color: $theme-color;
    padding-bottom: 10rpx;
    border-bottom: 4rpx solid $theme-color;
  }
}

.name {
  margin-right: 30rpx;
}

.active {
  color: map-get($map: $font-colors, $key: error);
}
</style>
