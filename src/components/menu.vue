<template>
  <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="50px" style="height: 100%;">
    <x-header slot="header"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :right-options="{showMore: true}"
        v-if="$route.meta && $route.meta.header"
        :title="$route.meta.title"></x-header>
    <router-view class="router-view"></router-view>
    <tabbar style="width:100%;position:absolute;left:0;bottom:0;right:0;z-index:101;" slot="bottom">
      <template v-for="item in $router.options.routes" v-if="item.meta && item.meta.menu">
        <tabbar-item :selected="$route.path.split('/')[1] === item.meta.link.split('/')[1]" :link='item.meta.link'>
          <img slot="icon" :src="item.meta.img">
          <span slot="label">{{item.meta.title}}</span>
        </tabbar-item>
      </template>
    </tabbar>
  </view-box>
</template>

<script>
  import { ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'

  export default {
    components: { ViewBox, XHeader, Tabbar, TabbarItem },
    data() {
      return {

      }
    },
    methods: {
      clickMenuButton() {
        console.log('fuck, click me...');
      }
    },
    updated() {
      // console.log(this.$route, this.$router.options.routes, '...')
    }
  }
</script>