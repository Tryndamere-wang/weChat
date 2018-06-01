<template>
  <div class="announcement">
    <card>
      <div slot="content" style="padding: 1.5rem 0.625rem 0rem; background-color: #fff;">
        <group style="padding-top: 10px;">
          <x-input title="手机号:" placeholder="请输入手机号" is-type="china-mobile" type="tel" v-model="login.tel"></x-input>
        </group>
        <group style="padding-top: 10px;">
          <x-input title="机构号:" placeholder="机构号" disabled type="text" v-model="login.ins"></x-input>
        </group>
        <group style="padding-top: 10px;">
          <x-input title="密码:" type="password" placeholder="请输入密码" v-model="login.passwd"></x-input>
        </group>
      </div>
    </card>
    <card>
      <div slot="content" style="padding: 2.5rem 0.625rem 0rem; background-color: #fff;">
        <x-button type="default" style="border-radius: 5px; background-color: #ddd;">登录</x-button>
        <div style="display: flex; padding: 20px 20px 0px;">
          <div style="flex: 1; text-align: left;">忘记密码</div>
          <div style="flex: 1; text-align: right;">立即注册</div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { Card, XInput, Group, XButton } from 'vux'
export default {
  data () {
    return {
      login: {
        tel: null,
        ins: 52637,
        passwd: null
      }
    }
  },
  components: { Card, XInput, Group, XButton },
  methods: {
  }
}
</script>

<style scoped lang="less">
.announcement {
  min-height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #fff;
}
.weui-panel:before {
  border-top: none !important;
}
.weui-panel:after {
  border-bottom: none !important;
}
</style>

