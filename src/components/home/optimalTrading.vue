<template>
  <div class="announcement">
    <template  v-for="item in 8">
      <card>
        <div slot="content" class="card-deal-flex card-demo-content01">
          <div class="deal_left">
            <div class="deal_left_img">
              <img slot="icon" width="60px;" height="60px" src="/static/img/home.svg">
            </div>
            <div class="deal_left_text">
              <span class="size0_75">收益率</span>
              <br/>
              <span class="size1_125">181.02%</span>
              <br/>
              <span class="size0_75">南方航空 600029</span>
            </div>
          </div>
          <div class="deal_other_mid">
            <div>
              <span class="size0_75_block">买价</span>
              <span class="size_0_625_block">10.73</span>
            </div>
            <div style="margin-top: 0.25rem;">
              <span class="size0_75_block">卖价</span>
              <span class="size_0_625_block">12.55</span>
            </div>
          </div>
          <div class="deal_other_right">
            <div>
              <span class="size0_75_block">盈亏</span>
              <span class="size_0_625_block">50444.32</span>
            </div>
            <div style="margin-top: 0.25rem;">
              <span class="size0_75_block">数量</span>
              <span class="size_0_625_block">50444.432</span>
            </div>
          </div>
        </div>
      </card>
    </template>
  </div>
</template>

<script>
import { Card } from 'vux'
export default {
  data () {
    return {}
  },
  components: { Card },
}
</script>

<style scoped lang="less">
.weui-panel {
  margin-top: 0px !important;
}
.card-demo-content01 {
  padding: 0.625rem 0;
}
.card-deal-flex {
  display: flex;
}
.deal_left {
  width: 50%;
  display: flex;
}
.deal_left_img {
  padding: 0.3125rem;
  flex: 2;
}
.deal_left_text {
  flex: 3;
}
.deal_other_mid {
  flex: 1;
  text-align: center;
}
.deal_other_right {
  flex: 1;
  text-align: right;
  padding-right: 0.375rem;
}
.size0_75 {
  font-size: 0.75rem;
}
.size1_125 {
  font-size: 1.125rem;
}
.size0_75_block {
  font-size: 0.75rem;
  display: block;
}
.size_0_625_block {
  font-size: 0.625rem;
  display: block;
}
</style>

