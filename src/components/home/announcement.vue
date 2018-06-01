<template>
  <div class="announcement">
    <template  v-for="item in 4">
      <card class="announcement_card">
        <div slot="content" >
          <p class="card_title">2018年3月22日  客户中心400电话暂停使用一天的通知</p>
          <p class="card_time">2018-03-22     14:50:21</p>
          <p class="card_content">尊敬的用户，您好！</p>
          <p class="card_content">2018年3月22日  客户中心400电话暂停使用一天的通知2018年3月22日  客户中心400电话暂停使用一天的通知2018年3月22日  客户中心400电话暂停使用一天的通知</p>
          <p class="card_footer">XXX场外期权</p>
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

<style scoped>
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
  .card_title {
    font-size: 1rem;
  }
  .card_time {
    font-size: 0.75rem;
  }
  .card_content {
    font-size: 0.875rem;
  }
  .card_footer {
    font-size: 1rem;
    text-align: right;
  }
</style>