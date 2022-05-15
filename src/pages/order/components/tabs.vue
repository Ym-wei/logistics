<template>
  <view class="tab-header">
    <view
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{active: tab.active}"
        @click="clickTab(tab)"
    >
      {{ tab.name }}
    </view>
  </view>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {TTabs} from "../type"

const tabs: TTabs[] = reactive([
  {
    name:'全部',
    active: true,
    id: 1
  },
  {
    name:'待付款',
    active: false,
    id: 2
  },
  {
    name:'待收货',
    active: false,
    id: 3
  },
  {
    name:'售后中',
    active: false,
    id: 4
  },
  {
    name:'待评价',
    active: false,
    id: 5
  }
])
const emit = defineEmits(['click'])
const clickTab = (tab:TTabs) => {
  const {id, active} = tab
  if (active) return

  tabs.forEach((t:TTabs) => {
    t.active = t.id === id
  })
  emit('click', tab)
}
</script>


<style lang="scss" scoped>

.tab-header {
  height: 100rpx;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid $border-color;
}

.tab {
  padding-top: 20rpx;
  font-size: map-get($map: $font-sizes, $key: middle);
  position: relative;

  &.active {
    font-weight: 600;

    &::before {
      position: absolute;
      content: '';
      bottom: 18rpx;
      width: 50%;
      border: 2px solid #40AE36;
      margin: 0 25%;
      border-radius: 20rpx;
    }
  }
}
</style>
