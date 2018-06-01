<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick" class="vux-1px-r">认购</tab-item>
      <tab-item @on-item-click="onItemClick" class="vux-1px-r">持仓</tab-item>
      <tab-item @on-item-click="onItemClick">结算</tab-item>
    </tab>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'

  export default {
    components: { Tab, TabItem },
    data() {
      return {

      }
    },
    methods: {
      onItemClick (index) {
        if (index === 0) {
          this.$router.push({path:'/transaction/transaction/subScription'});
        }
        if (index === 1) {
          this.$router.push({path:'/transaction/transaction/position'});
        }
        if (index === 2) {
          this.$router.push({path:'/transaction/transaction/clearing'});
        }
      },
    }
  }
</script>