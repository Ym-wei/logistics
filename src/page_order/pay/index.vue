<template>
  <view class="container">
    <view class="header">
      <uni-icons
          class="icon"
          custom-prefix="iconfont"
          type="icon-chenggong"
          color="#40AE36"
          size="65"
      />
      付款成功
    </view>
    <view class="info">
      <view class="item">
        <text>接收方</text>
        <text class="value">广东省运通四方汽配供应链</text>
      </view>
      <view class="item">
        <text>订单编号</text>
        <text class="value">7894567459546845</text>
      </view>
      <view class="item">
        <text>支付方式</text>
        <text class="value">微信支付</text>
      </view>
      <view class="item">
        <text>积分奖励</text>
        <text class="value">361</text>
      </view>
    </view>
    <view class="evaluate" @click="skipEvaluate">给我们服务打个分吧!!!</view>
  </view>
</template>

<script setup lang="ts">
import {routePush} from "../../utils";

const skipEvaluate = ()=> {
  routePush({
    url: '../../page_order/evaluate/index'
  })
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: $bg-gray;
  box-sizing: border-box;
  padding: $commonPadding;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80rpx 0;
  font-size: map-get($font-sizes, default);
  font-weight: 600;

  .icon {
    margin-bottom: 15rpx;
  }
}

.info {
  background: #ffffff;
  border-radius: $borderRadius;
  padding: $commonPadding;
}

.item {
  height: 80rpx;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: map-get($font-colors, gray);
  font-size: map-get($font-sizes, default);
}
.item:last-child {
  border-bottom: none;
}

.value {
  color: map-get($font-colors, lightBalck);
}


.evaluate {
  display: inline-block;
  color: #1F75EC;
  padding-top: 30rpx;
  font-size: map-get($font-sizes, default);
  border-bottom: 1px solid #1F75EC;
}
</style>
