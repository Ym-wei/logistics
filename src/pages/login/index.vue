<template>
  <view class="login-wrapper">
    <view class="login-item">
      <view class="title">account</view>
      <view class="input">
        <text class="iconfont icon-zhanghao"></text>
        <input
            type="number"
            v-model="account"
            maxlength="11"
            placeholder="请输入账号"
        />
      </view>
    </view>
    <view class="login-item">
      <view class="title">password</view>
      <view class="input">
        <text class="iconfont icon-mima" />
        <input
            :password="showPassword"
            name="password"
            v-model="password"
            type="text"
            maxlength="20"
            placeholder="请输登录密码"
        />
        <text
            @click="showPasswordHandle"
            :class="{active: !showPassword}"
            class="iconfont icon-yulan"
        />
      </view>
    </view>
    <view
        @click="loginSubmit"
        class="btn"
    >
      登录
    </view>
  </view>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {isMobile, routeSwitchTab,isEmptyString} from "../../utils";
const showPassword = ref(true)
const account = ref('')
const password = ref('')

const showPasswordHandle = ()=> {
  showPassword.value = false
  setTimeout(() => {
    showPassword.value = true
  }, 1500)
}

const loginSubmit = () => {
  if(!isMobile(account.value)) {
    uni.showToast({
      icon: "none",
      title: '请输入账号',
      duration: 1000
    })
    return
  }

  if (isEmptyString(password.value)) {
    uni.showToast({
      icon: "none",
      title: '请输入密码',
      duration: 1000
    })
    return
  }
  routeSwitchTab({
    url: '../index/index'
  })
}
</script>
<style lang="scss" scoped>
.login-wrapper {
  padding: 100rpx 80rpx;
}

.login-item {
  margin-bottom: $commonPadding;
  .title {
    font-size: map-get($map: $font-sizes, $key: default);
    color: map-get($map: $font-colors, $key: lightBalck);
    margin-bottom: 15rpx;
  }

  .input {
    height: 50rpx;
    padding: 10rpx;
    border: 1px solid $border-color;
    border-radius: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      flex: 1;
      font-size: map-get($map: $font-sizes, $key: default);
      overflow: hidden;
    }

    .iconfont {
      margin-right: 15rpx;
    }

    .active {
      color: $theme-color;
    }
  }
}

.btn {
  height: 80rpx;
  background: $theme-color;
  margin-top: 40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10rpx;
  cursor: pointer;
}
</style>
