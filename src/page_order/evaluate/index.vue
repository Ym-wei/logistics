<template>
  <view class="container">
    <view class="title">
      How was the experience?
    </view>
    <view class="tip">
      Share your experience, so next time we can serve you even more better
    </view>
    <view class="evaluate">
      <uni-rate
          :max="5"
          v-model="score"
          @change="changeValue"
          margin="10"
          size="50"
      />
    </view>
    <view class="text-input">
      <textarea class="textarea" placeholder="感谢您的评价..." v-model="evaluateMessage"/>
    </view>

    <view class="btn">
      <button type="primary" :plain="false">提交</button>
    </view>
  </view>
</template>


<script setup lang="ts">
import {ref} from "vue";

const score = ref(0)
const evaluateMessage = ref('')

const changeValue = (val: { value: number }) => {
  console.log(evaluateMessage)
  console.log(val);
}
</script>
<style lang="scss" scoped>
.container {
  padding: $commonPadding;
  margin-bottom: 30rpx;
}

.title {
  padding: $commonPadding 0;
  font-size: map-get($font-sizes, large);
  color: #000;
}

.tip {
  font-size: map-get($font-sizes, default);
  color: map-get($font-colors, gray);
}

.evaluate {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 40rpx 0;
}

.text-input {
  border: 1px solid $border-color;
  padding: 20rpx;
  border-radius: $borderRadius;
}

.textarea {
  width: 100%;
}

.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: $commonPadding;

}
</style>