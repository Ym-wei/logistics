<template>
  <view class="container">
    <view class="tip">请填写快递的单号,支持拍照自动识别</view>

    <view class="express">
      <text class="title">快递公司</text>
      <view class="content">
        <picker @change="bindPickerChange" :value="index" :range="expressList">
          <view class="uni-input">{{ expressList[index] || '请选择'}}</view>
        </picker>
      </view>
    </view>

    <view class="express">
      <text class="title">快递单号</text>
      <view class="content">
        <input
            type="text"
            v-model="expressNumber"
            maxlength="30"
            placeholder="请输入账号"
        />
      </view>
      <text
          @click="scanCodeHandle"
          class="iconfont icon-iconfontscan"
      />
    </view>

  </view>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import ScanCodeSuccessRes = UniApp.ScanCodeSuccessRes;

// 快递列表
const expressList = reactive(['中通快递', '圆通快递', '顺丰快递', '极兔快递'])
const index = ref(-1)

// 快递单号
const expressNumber = ref('')
const bindPickerChange  = (e:any) =>{
  index.value = e.detail.value
}
const scanCodeHandle = () => {
  uni.scanCode({
    success: async (data) => {
      const {result}: ScanCodeSuccessRes = data
      if (result) {
        expressNumber.value = result
      } else {
        uni.showToast({
          icon: 'none',
          title: '扫描失败',
          duration: 3000,
          position: 'top'
        })
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.container {
  padding: 80rpx $commonPadding 0;
}

.tip {
  font-size: map-get($map: $font-sizes, $key: default);
  color: map-get($map: $font-colors, $key: gray);
}

.express {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid $border-color;
  padding: $commonPadding;
  margin: 60rpx 0;
  border-radius: $borderRadius;

  .title {
    position: absolute;
    top: -10px;
    left: 20rpx;
    background: #fff;
    padding: 0 10rpx;
    font-size: map-get($map: $font-sizes, $key: small);
    color: map-get($map: $font-colors, $key: gray);
  }

  .content {
    flex: 1;
    overflow: hidden;
  }

  .iconfont {
    font-size: 40rpx;
    padding-left:15rpx;
  }
}
</style>
