<template>
  <view class="bottom-operation">
    <view class="total-price">
      <view>总额</view>
      <view class="price">{{ price }}</view>
    </view>
    <view class="btn" @click="clickBtn" :style="btnStyle">
      {{btnName}}
    </view>
  </view>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

const emit = defineEmits(['clickBtn'])
const props = defineProps({
  btnName: {
    type: String,
    default: ''
  },
  btnColor: {
    type: String,
    default: '#1F75EC'
  },
  price: {
    type: String,
    default: ''
  }
})

const btnStyle = reactive({
  background: props.btnColor
})
const clickBtn  = () => {
  emit('clickBtn')
}
</script>

<style lang="scss" scoped>
.bottom-operation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $detail-bottom-operation-height;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 $commonPadding;
  justify-content: space-between;

  .total-price {
    font-size: map-get($font-sizes, default);
    color: map-get($font-colors, lightBalck);
  }

  .price {
    font-size: map-get($font-sizes, large);
    color: map-get($font-colors, error);
    font-weight: 600;
  }

  .btn {
    margin-right: $commonPadding;
    width: 400rpx;
    height: 100rpx;
    line-height: 100rpx;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $borderRadius;
    position: relative;
    left: -$commonPadding;
  }
}
</style>