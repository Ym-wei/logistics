<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('我是查询页面')
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.logo {
  height: 750rpx;
  width: 750rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 50rpx;
  color: $theme-color;
}
</style>
