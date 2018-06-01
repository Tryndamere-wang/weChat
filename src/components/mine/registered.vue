<template>
  <div class="announcement">
    <card>
      <div slot="content" style="padding: 1.5rem 0.625rem 0rem; background-color: #fff;">
        <group style="padding-top: 10px;">
          <x-input title="机构号:" placeholder="请输入机构号" @on-blur="onBlur" type="text" v-model="register.ins"></x-input>
        </group>
        <group style="padding-top: 10px;">
          <x-input title="手机号:" placeholder="请输入手机号" is-type="china-mobile" type="tel" v-model="register.tel"></x-input>
        </group>
        <group style="padding-top: 10px;">
          <x-input title="验证码:" placeholder="请输入验证码" is-type="china-mobile" type="tel" v-model="register.tel">
            <x-button slot="right" type="primary" mini>发送验证码</x-button>
          </x-input>
        </group>
        <group style="padding-top: 10px;">
          <x-input title="密码:" type="password" placeholder="请输入密码" v-model="register.passwd"></x-input>
        </group>
        <group style="padding-top: 10px;">
          <x-input title="确认密码:" v-model="register.ensurePass" type="password" placeholder="请再次输入密码" :equal-with="register.passwd"></x-input>
        </group>
      </div>
    </card>
    <card>
      <div slot="content" style="padding: 2.5rem 0.625rem 0rem; background-color: #fff;">
        <x-button type="default" style="border-radius: 5px; background-color: #ddd;">注册</x-button>
        <div style="display: flex; padding: 20px 20px 0px;">
          <div style="flex: 1; text-align: left;">
            <check-icon :value.sync="status" type="plain">我已阅读并同意
              <router-link to="/mine/mine">《用户协议》</router-link>
            </check-icon>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { Card, XInput, Group, XButton, CheckIcon } from 'vux'
export default {
  data () {
    return {
      register: {
        ins: null,
        tel: null,
        verify: null,
        passwd: null,
        ensurePass: null
      },
      status: false
    }
  },
  components: { Card, XInput, Group, XButton, CheckIcon },
  methods: {
    onBlur (val) {
      console.log('on blur', val)
    },
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

