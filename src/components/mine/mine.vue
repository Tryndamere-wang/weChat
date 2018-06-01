<template>
  <div class="announcement">
    <card>
      <div slot="content" style="padding: 1rem 0.625rem; background-color: #fff;">
        <div style="display: flex;">
          <div style="flex: 2">
            <img src="/static/img/home.svg" style="width: 100px; height: 80px;">
          </div>
          <div style="flex: 5">
            <div style="font-size: 18px; padding: 10px 0px;">请先登录</div>
            <div style="font-size: 14px; padding: 0px 0px;">账户余额: --元</div>
          </div>
        </div>
        <div style="display: flex;">
          <div style="flex: 1; padding: 10px 10px;">
            <x-button type="default" plain>登录</x-button>
          </div>
          <div style="flex: 1; padding: 10px 10px;">
            <x-button type="default" plain>提现</x-button>
          </div>
        </div>
      </div>
    </card>
    <card>
      <div slot="content" style="padding: 1rem 0.625rem; background-color: #fff;">
        <group>
          <cell title="我的推广" is-link>
            <img slot="icon" width="30" style="display:block; margin-right: 15px;" src="/static/img/home.svg">
          </cell>
          <cell title="我的消息" is-link>
            <img slot="icon" width="30" style="display:block; margin-right: 15px;" src="/static/img/home.svg">
          </cell>
          <cell title="我的订单" is-link>
            <img slot="icon" width="30" style="display:block; margin-right: 15px;" src="/static/img/home.svg">
          </cell>
          <cell title="资金明细" is-link>
            <img slot="icon" width="30" style="display:block; margin-right: 15px;" src="/static/img/home.svg">
          </cell>
          <cell title="合作协议" is-link>
            <img slot="icon" width="30" style="display:block; margin-right: 15px;" src="/static/img/home.svg">
          </cell>
          <cell title="客服咨询" is-link>
            <img slot="icon" width="30" style="display:block; margin-right: 15px;" src="/static/img/home.svg">
          </cell>
        </group>
      </div>
    </card>
  </div>
</template>

<script>
import { Card, XInput, Group, Cell, XButton } from 'vux'
export default {
  data () {
    return {
    }
  },
  components: { Card, XInput, Group, Cell, XButton },
  methods: {
  }
}
</script>

<style scoped>
.weui-cells {
  margin-top: 0em !important;
}
.announcement {
  min-height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.card-demo-content01 {
  padding: 1rem;
}
.card-deal-flex {
  display: flex;
}
.deal_left {
  display: inline-block;
  width: 5.6rem;
}
.deal_other_right {
  flex: 1;
  display: inline-block;
}
.size0_75 {
  font-size: 0.75rem;
}
.size1 {
  font-size: 1rem;
}
.size0_75_block {
  font-size: 0.75rem;
  display: block;
}
.size_0_625_block {
  font-size: 0.625rem;
  display: block;
}
.inquiry_block {
  display: flex;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.inquiry_input {
  height: 1.875rem ;
  border: none;
  margin-left: 2px;
  outline: none;
  font-size: 1rem;
}
.inquiry_input.focus {
  outline: none;
  border:  none !important;
}
.right {
  flex: 3;
  display: inline-block;
  text-align: right;
  font-size: 12px;
  padding-top: 20px;
}
.nominalCapital-item {
  width: 80px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.nominalCapital-item-selected {
  background: #ffffff url(/static/img/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
.exerciseCycle-item {
  width: 50px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.exerciseCycle-item-selected {
  background: #ffffff url(/static/img/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
.weui-panel:before {
  border: none;
}
.weui-panel:after {
  border: none;
}
</style>

