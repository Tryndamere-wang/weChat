<template>
  <div>
    <swiper :list="demoList" loop auto :show-dots="false" :aspect-ratio="300/800"></swiper>
    <card>
      <div @click="on_click" slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span class="size0_875">上证指数</span>
          <br/>
          <span class="size1_125">3280.95</span>
          <br/>
          <span style="font-size: 0.625rem;">-9.6-0.29%</span>
        </div>
        <div class="vux-1px-r">
          <span class="size0_875">深圳指数</span>
          <br/>
          <span class="size1_125">3280.95</span>
          <br/>
          <span style="font-size: 0.625rem;">-9.6-0.29%</span>
        </div>
        <div>
          <span class="size0_875">创业指板</span>
          <br/>
          <span class="size1_125">3280.95</span>
          <br/>
          <span style="font-size: 0.625rem;">-9.6-0.29%</span>
        </div>
      </div>
    </card>
    <card>
      <div slot="content" class="card-flex">
        <div class="left">公告
          <template v-if="status">
            <badge></badge>
          </template>
        </div>
        <div class="main">
          <swiper auto loop height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
            <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
            <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
            <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
            <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
            <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
            <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
          </swiper>
        </div>
        <div class="right" @click="navigateAnnouncement">更多</div>
      </div>
    </card>
    <div>
      <div class="card-deal-flex">
        <div class="tab_left">
          <tab v-model="tabIndex">
            <tab-item selected @on-item-click="on_click_tab">最新动态</tab-item>
            <tab-item @on-item-click="on_click_tab">最优交易</tab-item>
          </tab>
        </div>
        <div class="tab_right" @click="navigateToLatest">更多</div>
      </div>
      <template v-if="tabIndex === 0" v-for="item in 2">
        <card>
          <div slot="content" class="card-demo-flex card-demo-content01">
            <div>
              <span class="size0_75">中粮糖业</span>
              <br/>
              <span class="size0_75">600737</span>
            </div>
            <div>
              <span class="size0_875">7.75</span>
              <br/>
              <span class="size0_75">认购</span>
            </div>
            <div>
              <span class="size0_75">客户86380</span>
              <br/>
              <span class="size0_75">03/21 14:50</span>
            </div>
          </div>
        </card>
      </template>
      <template v-if="tabIndex === 1" v-for="i in 2">
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

    <group>
      <cell title="资讯" value="更多" link='/home/information' is-link></cell>
    </group>

    <template v-if="2>1" v-for="k in 3">
      <card>
        <div @click="on_click" slot="content">
          <div class="information">
            <p class="size0_875">午间看盘：沪指震荡上行涨0.17% 工业互联网再爆发ddddddddddddddddd</p>
            <p class="size0_75">来源：网易财经   2018-03-09   11:45:41</p>
          </div>
        </div>
      </card>
    </template>

  </div>
</template>

<script>
import { Group, Grid, GridItem, Swiper, SwiperItem, Cell, Card, CellBox, Panel, Badge, Tab, TabItem } from 'vux'

export default {
  data () {
    return {
      demoList: [{
        url: 'javascript:',
        img: '/static/img/1.jpg'
      }, {
        url: 'javascript:',
        img: '/static/img/2.jpg'
      }, {
        url: 'javascript:',
        img: '/static/img/3.jpg'
      }],
      status: true,
      tabIndex: 0
    }
  },
  components: { Group, CellBox, Grid, GridItem, Swiper, SwiperItem, Cell, Card, Panel, Badge, Tab, TabItem },
  methods: {
    navigateAnnouncement() {
      this.$router.push({path:'/home/announcement'});
      this.status = !this.status;
      console.log('go to announcement...');
    },
    navigateToLatest() {
      if (this.tabIndex) {
        this.$router.push({path:'/home/optimalTrading'});
      } else {
        this.$router.push({path:'/home/latestNews'});
      }
    },
    on_click() {
      this.status = !this.status;
      console.log('aaa');
    },
    on_click_tab(index) {
      this.tabIndex = index;
      console.log(index, 'sss');
    }
  }
}
</script>

<style scoped lang="less">
.weui-panel {
  margin-top: 0px !important;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 0.625rem 0;
}
.card-padding {
  padding: 0.9375rem;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 0.75rem;
}
.text-scroll {
  border: 0.0625rem solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.875rem;
}
.vux-swiper-item > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-flex {
  display: flex;
  height: 2.5rem;
}
.left {
  padding-top: 0.5rem;
  flex: 1;
  text-align: center;
  font-size: 0.875rem;
}
.main {
  padding-top: 0.3125rem;
  width: 70%;
}
.right {
  padding-top: 0.5rem;
  flex: 1;
  text-align: center;
  font-size: 0.875rem;
}
.right:after {
  content: '>';
}
.text-scroll {
  border: none;
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
.tab_left {
  flex: 3;
}
.tab_right {
  flex: 1;
  text-align: right;
  padding: 8px;
  background-color: white;
}
.tab_right:after {
  content: ">"
}
.information > p {
  padding: 0.125rem 0.625rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.size0_875 {
  font-size: 0.875rem;
}
.size1_25 {
  font-size: 1.25rem;
}
</style>