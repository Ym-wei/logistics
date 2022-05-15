<template>
  <view class="container">
    <Tabs @click="clickTabHandle"/>
    <List-View
        :list="orderList"
        @skip="skipDetail"
    />
  </view>
</template>

<script setup lang="ts">
import {ref, reactive, effect} from 'vue'
import {getUUID, routePush} from "../../utils";
import ListView from './components/listView.vue'
import {TOrder, TTabs} from "./type";
import {onReachBottom} from "@dcloudio/uni-app";
import Tabs from './components/tabs.vue'

const title = ref('我是订单')

const orderList: TOrder[] = reactive([])

const skipDetail = (orderId:string) => {
  routePush({
    url: '../../page_order/detail/index',
    query: {
      orderId
    }
  })
}

effect(() => {
  setTimeout(() => {
    orderList.push(...[
      {
        id: getUUID()
      },
      {
        id: getUUID()
      },
      {
        id: getUUID()
      }
    ])
  }, 1000)
})

// 底部更新
onReachBottom(() => {
  uni.showLoading({
    title: '加载中'
  });
  setTimeout(() => {
    orderList.push(...[
      {
        id: getUUID()
      },
      {
        id: getUUID()
      },
      {
        id: getUUID()
      }
    ])
    uni.hideLoading();
  }, 1000)
})

const clickTabHandle = (tab: TTabs) => {
  console.log(tab);
}

</script>
