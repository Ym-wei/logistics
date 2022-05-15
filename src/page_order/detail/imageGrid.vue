<template>
  <view class="container">
    <uni-grid :column="3" :showBorder="false">
      <uni-grid-item v-for="(item, index) in list.slice(0, showLen)">
        <view class="item">
          <image
              class="image"
              mode="aspectFill"
              @click="clickImage"
              src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"
          />
          <view class="more-wrap" v-if="index === 2 && hasMore" @click="showMoreImage">
            <view class="more">更多...</view>
          </view>
        </view>
      </uni-grid-item>
      <uni-grid-item v-if="list.length > 3 && !hasMore">
        <view class="item">
          <view class="more-wrap" @click="pickUpImage">
            <view class="more pickUp">收起...</view>
          </view>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps({
  list: {
    type: Array,
    default() {
      return []
    },
  }
})

const showLen = ref(3)
const hasMore = ref(props.list.length > 3)

const showMoreImage = () => {
  hasMore.value = false
  showLen.value = props.list.length
}

const pickUpImage = () => {
  hasMore.value = true
  showLen.value = 3
}

const emit = defineEmits(['clickImage'])

const clickImage = () =>{
  emit('clickImage')
}

</script>

<style lang="scss">
.container {
  background: #fff;
  padding: 20rpx 10rpx;
  border-radius: $borderRadius;
  margin-bottom: $commonPadding;
}

.image ,.more{
  width: 90%;
  height: 90%;
  border-radius: $borderRadius;
}

.more-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.more {
  background: rgba(7,17,27,0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.pickUp {
  background: transparent;
  border: 1px solid map-get($font-colors, gray);
  color: map-get($font-colors, gray);
}

.item {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  height: 100%;
}
</style>
