<template>
  <div class="announcement">
    <template  v-for="item in 11">
      <card class="announcement_card">
        <div @click="on_click" slot="content">
          <div class="information">
            <p class="size1">午间看盘：沪指震荡上行涨0.17% 工业互联网再爆发</p>
            <p class="size0_875">来源：网易财经   2018-03-09   11:45:41</p>
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
  methods: {
    on_click() {
      console.log('click...');
    }
  }
}
</script>

<style scoped lang="less">
.announcement {
  background-color: #c1bdbd;
  min-height: 100%;
  width: 100%;
  margin: 0px;
  padding: 5px 0px 10px;
}
.announcement_card {
  margin: 0.9375rem 0.9375rem 0px;
  padding: 0.625rem 0.9375rem;
  border-radius: 0.625rem;
  background-color: white;
}
.size1 {
  font-size: 1rem;
}
.size0_875 {
  font-size: 0.875rem;
}
.information > p {
  padding: 0.125rem 0.625rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

