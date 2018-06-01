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
      </div>
    </card>
    <card>
      <div slot="content" style="padding: 2.5rem 0.625rem 0rem; background-color: #fff;">
        <x-button type="default" style="border-radius: 5px; background-color: #ddd;">提交</x-button>
      </div>
    </card>
  </div>
</template>

<script>
import { Card, XInput, Group, XButton } from 'vux'
export default {
  data () {
    return {
      register: {
        ins: null,
        tel: null,
        verify: null,
        passwd: null
      }
    }
  },
  components: { Card, XInput, Group, XButton },
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

