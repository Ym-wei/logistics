<template>
  <view class="store-wrap" :class="{activeCls: props.active}">
    <text class="check iconfont icon-chenggong"/>
    <image
        class="image"
        mode="aspectFill"
        src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
    />
    <view class="info">
      <view class="name">德邦物流-主体店</view>
      <view class="count">
        <text class="iconfont icon-dingxiang" />
        1 x 件
      </view>
      <view class="operation">
        <text class="detail">查看详情</text>
        <text class="btn">有退货</text>
      </view>
    </view>
    <view class="state-wrap">
      <view class="state">待处理</view>
      <view class="count">8件</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.store-wrap {
  position: relative;
  padding: 20rpx;
  background: $bg-gray;
  margin: 30rpx 0;
  display: flex;
  border-radius: $borderRadius;
  border: 2px solid transparent;

  &.activeCls {
    border-color: $theme-color;

    .check {
      display: inline-block;
    }
  }
}

.check {
  display: none;
  position: absolute;
  top: -22rpx;
  right: -16rpx;
  font-size: 50rpx;
  color: $theme-color;;
  background: #fff;
}

.image {
  width: 160rpx;
  height: 180rpx;
  border-radius: $borderRadius;
  margin-right: 25rpx;
}

.info {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;


  .name {
    font-size: map-get($map: $font-sizes, $key: middle);
    font-weight: 600;
  }

  .count {
    font-size: map-get($map: $font-sizes, $key: default);
  }
}

.operation {
  display: flex;

  .detail {
    font-size: map-get($map: $font-sizes, $key: middle);
    color: $theme-color;
    margin-right: 30rpx;
  }
  .btn {
    font-size: map-get($map: $font-sizes, $key: default);
    color: map-get($map: $font-colors, $key: error);
  }
}



.state-wrap {
  font-size: map-get($map: $font-sizes, $key: default);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .state {
    color: $theme-color;
    margin-bottom: 15rpx;
  }

  .count {
    font-weight: 600;
  }
}
</style>
