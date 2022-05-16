<template>
  <view class="container">
    <top-header />
    <store :active="true"/>
    <store />
    <store />
    <store />
    <store />
    <store />
  </view>
</template>

<script lang="ts" setup>
import TopHeader from './topHeader.vue'
import Store from './store.vue'

</script>

<style lang="scss" scoped>
.container {
  padding: $commonPadding;
}
</style>
