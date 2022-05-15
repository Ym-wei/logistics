<template>
  <view class="container">
    <view class="order" v-for="item in list" :key="item.id">
      <view class="state">
        <text class="time">2022.5.11 21:36:42</text>
        <text class="state-name">待收货</text>
      </view>
      <view @click="skipDetail(item.id)">
        <view class="name">广东省运通四方</view>
        <Logistics />

        <view class="info">
          <image
              class="image"
              mode="aspectFill"
              src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
          />
          <view class="msg">
            <view class="prod-name">保险杠*后*东风*ALC001 1等 5件</view>
            <view class="time">总数量：28件</view>
            <view class="time">当批退货：0件</view>
          </view>
          <view class="price">
            ¥897
          </view>
        </view>
      </view>
      <view class="operation">
        <button class="btn" plain="true" size="mini">再来一单</button>
        <button class="btn btn-success" plain="true" size="mini">确认收货</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {TOrder} from "../type";
import Logistics from './logistics.vue'
defineProps({
  list: {
    type: Array as () => Array<TOrder>,
    default() {
      return []
    },
  }
})

const emit = defineEmits(['skip'])

const skipDetail = (id:string) =>{
  emit('skip', id)
}
</script>
<style scoped lang="scss">
.container {
  padding: 0 $commonPadding;
}

.order {
  padding: $commonPadding 10rpx;
  margin: 40rpx 0;
}

.time {
  font-size: map-get($map: $font-sizes, $key: default);
  color: map-get($map: $font-colors, $key: gray);
}

.state {
  height: 80rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-color;

  .state-name {
    font-size: map-get($map: $font-sizes, $key: middle);
    color: $theme-color;
  }
}

.name {
  height: 90rpx;
  padding-top: 10px;
  font-size: map-get($map: $font-sizes, $key: middle);
}


.info {
  display: flex;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 15rpx;
  }

  .msg {
    flex: 1;
    overflow: hidden;
    padding: 0 $commonPadding;
  }

  .prod-name {
    font-size: map-get($map: $font-sizes, $key: middle);
    color: #000;
    font-weight: bold;
    @include moreDot(2);
    margin-bottom: 10rpx;
  }

  .price {
    color: map-get($map: $font-colors, $key: error);
    font-weight: bold;
  }
}

.operation {
  display: flex;
  justify-content: flex-end;
  margin: $commonPadding 0 $commonPadding;

  .btn {
    border-radius: 30rpx;
    border-color: #4C4C4C;
    margin: 0 0 0 20rpx;
  }
  .btn-success {
    border-color: map-get($map: $font-colors, $key: success);
    color: map-get($map: $font-colors, $key: success);
  }
}
</style>
