<template>
  <view class="detail-container">
    <Logistics :is-detail="true"/>
    <image-grid :list="[{},{},{}, {},{},{}, {},{},{}, {},{},{}, {},{},{}, {},{},{}, {}]" @clickImage="skipShopList"/>
    <view class="white-wrap def-text">
      <view class="item">
        <text>合计件数</text>
        <text class="count">共8件</text>
      </view>
      <view class="item">
        <text>商品合计</text>
        <text class="count">￥388</text>
      </view>
      <view class="item">
        <text>当批退货</text>
        <text class="sale">-￥20</text>
      </view>
      <view class="item">
        <text>活动优惠</text>
        <text class="sale">-￥7</text>
      </view>
      <view class="total item">
        <text>应付金额合计</text>
        <text class="price">￥361</text>
      </view>
    </view>
    <view class="white-wrap def-text">
      <view class="item">
        <text>下单时间</text>
        <text class="sale">2022年5月13日</text>
      </view>
      <view class="item">
        <text>订单编号</text>
        <text class="sale">4583453178344563125</text>
      </view>
      <view class="item">
        <text>支付方式</text>
        <text class="sale">货到付款</text>
      </view>
      <view class="item">
        <text>交易流水号</text>
        <text class="sale">4583453178344563125</text>
      </view>
    </view>
    <Operation
        btn-name="支付货款"
        btn-color="#40AE36"
        price="¥361"
        @click-btn="showPrice"
    />

    <uni-popup ref="popup" type="share">
      <view class="send-price-wrap">
        <view class="header">
          确认付款
          <uni-icons
              class="close"
              custom-prefix="iconfont"
              type="icon-guanbi1"
              color="#000"
              size="17"
              @click="closePrice"
          />
        </view>
        <view class="price">
          ¥361.00
        </view>
        <view class="item">
          <text>订单编号</text>
          <text class="value">9089089067897</text>
        </view>
        <view class="item">
          <text>支付方式</text>
          <text class="value">微信支付</text>
        </view>
        <view class="btn" @click="paymentHandle">立即付款</view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import Logistics from '../../pages/order/components/logistics.vue'
import ImageGrid from './imageGrid.vue'
import Operation from './operation.vue'
import {routePush} from "../../utils";
import './index.scss'

const currentRefs:any = getCurrentInstance()!
const showPrice = () => {
  // TODO 发货
  routePush({
    url: '../../page_order/shipments/index'
  })
  //  TODO 立即支付
  // currentRefs.ctx.$refs.popup.open();
}
const closePrice = () => {
  currentRefs.ctx.$refs.popup.close();
}

const skipShopList = () => {
  routePush({
    url: '../../page_order/shopList/index'
  })
}

const paymentHandle = () => {
  closePrice()
  routePush({
    url: '../../page_order/pay/index'
  })
}
</script>
