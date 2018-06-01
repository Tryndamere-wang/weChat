<template>
  <div class="announcement">
    <template  v-for="item in 12">
      <card>
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div>
            <span class="size1">中粮糖业</span>
            <br/>
            <span class="size1">600737</span>
          </div>
          <div>
            <span class="size1_25">7.75</span>
            <br/>
            <span class="size1">认购</span>
          </div>
          <div>
            <span class="size1">客户86380</span>
            <br/>
            <span class="size1">03/21 14:50</span>
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
.card-demo-flex {
  display: flex;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 0.75rem;
}
.card-demo-content01 {
  padding: 0.625rem 0;
}
.size1 {
  font-size: 1rem;
}
.size1_25 {
  font-size: 1.25rem;
}
</style>

