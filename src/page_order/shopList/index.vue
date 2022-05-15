<template>
  <view class="container">
    <view class="title-header">
      <text>订单总金额</text>
      <text>¥3750</text>
    </view>
    <view class="shop-wrap" v-for="item in 3">
      <image
          class="image"
          mode="aspectFill"
          src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
      />
      <view class="count info">
        <view class="dot">保险杠*后*东风*ALC001</view>
        <view class="dot price">单价 $45.00</view>
      </view>
      <view class="count">
        <view>5个</view>
        <view>当批退货: <text>1个</text></view>
      </view>
    </view>

    <Operation
        btn-name="确认签收"
        btn-color="#1F75EC"
        price="¥361"
        @click-btn="confirmHandle"
    />

    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog title="确认签收" :duration="2000" @close="closeDialog" @confirm="submit">
        <view class="confirm-wrap">
          <view class="item">
            <text>总商品数量:</text>
            <text>12件</text>
          </view>
          <view class="item">
            <text>当批退货数量:</text>
            <text>2件</text>
          </view>
        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script setup lang="ts">
import Operation from '../detail/operation.vue'
import {getCurrentInstance} from "vue";
const currentRefs:any = getCurrentInstance()!
const confirmHandle = () => {
  currentRefs.ctx.$refs.popup.open();
}
const closeDialog = () => {
  currentRefs.ctx.$refs.popup.close();
}
const submit = () => {
  debugger
}


</script>

<style lang="scss" scoped>
.container {
  padding: $commonPadding $commonPadding $detail-bottom-operation-height;
}
.title-header {
  font-size: map-get($font-sizes, large);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
  border-bottom: 1px solid $border-color;
}

.shop-wrap {
  display: flex;
  padding: $commonPadding 0;
  font-size: map-get($font-sizes, default);
}

.image {
  border-radius: $borderRadius;
  height: 110rpx;
  width: 110rpx;
  margin-right: 30rpx;
}

.count {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200rpx;
  text-align: right;
  padding: 10rpx 0;

  text {
    color: map-get($font-colors, error);
    font-weight: 600;
  }
}

.info {
  flex: 1;
  padding: 10rpx 0;
  text-align: left;

  .price {
    color: map-get($font-colors, gray);
  }
}

.confirm-wrap {
  width: 100%;
}

.item {
  display: flex;
  font-size: map-get($font-sizes, default);
  color: #000;

  text {
    flex: 1;
    overflow: hidden;
  }

  text:first-child {
    text-align: right;
    margin-right: 20rpx;
    margin-bottom: 10rpx;
  }
}
</style>