<template>
  <div class="announcement">
    <div style="padding: 1rem 0.625rem; display: flex; background-color: #fff;">
      <div style="width: 5.625rem; padding-top: 0.625rem; display: inline-block;">标的股票:</div>
      <div style="display: inline-block; flex: 1; margin: 0px; padding: 10px 0px 0px;">
        <div class="inquiry_block">
          <div style="flex: 5;">
            <div style="position: relative;">
              <div style="height: 30px; position: relative; padding-left: 2px; background-color: white; border: 1px solid #ddd; display: flex; width: 100%;">
                <input type="text" name="inquiry" v-model="targetStock" class="inquiry_input">
                <span @click="clearStock">
                  <icon type="clear"></icon>
                </span>
              </div>
              <div style="position: absolute; width: 100%; max-height: 180px; background-color: #eee; line-height: 30px; overflow-y: auto; margin-top: 5px; border: 1px solid #a09fa2; display: none; z-index: 100;">
                <div><!-- react-text: 421 -->安通控股<!-- /react-text --><!-- react-text: 422 -->&nbsp;<!-- /react-text --><!-- react-text: 423 -->600179<!-- /react-text --></div>
                <div><!-- react-text: 425 -->安彩高科<!-- /react-text --><!-- react-text: 426 -->&nbsp;<!-- /react-text --><!-- react-text: 427 -->600207<!-- /react-text --></div>
                <div><!-- react-text: 429 -->安琪酵母<!-- /react-text --><!-- react-text: 430 -->&nbsp;<!-- /react-text --><!-- react-text: 431 -->600298<!-- /react-text --></div>
                <div><!-- react-text: 433 -->安迪苏<!-- /react-text --><!-- react-text: 434 -->&nbsp;<!-- /react-text --><!-- react-text: 435 -->600299<!-- /react-text --></div>
                <div><!-- react-text: 437 -->澳柯玛<!-- /react-text --><!-- react-text: 438 -->&nbsp;<!-- /react-text --><!-- react-text: 439 -->600336<!-- /react-text --></div>
                <div><!-- react-text: 441 -->安源煤业<!-- /react-text --><!-- react-text: 442 -->&nbsp;<!-- /react-text --><!-- react-text: 443 -->600397<!-- /react-text --></div>
                <div><!-- react-text: 445 -->安泰集团<!-- /react-text --><!-- react-text: 446 -->&nbsp;<!-- /react-text --><!-- react-text: 447 -->600408<!-- /react-text --></div>
                <div><!-- react-text: 449 -->安徽水利<!-- /react-text --><!-- react-text: 450 -->&nbsp;<!-- /react-text --><!-- react-text: 451 -->600502<!-- /react-text --></div>
                <div><!-- react-text: 453 -->安阳钢铁<!-- /react-text --><!-- react-text: 454 -->&nbsp;<!-- /react-text --><!-- react-text: 455 -->600569<!-- /react-text --></div>
                <div><!-- react-text: 457 -->爱建集团<!-- /react-text --><!-- react-text: 458 -->&nbsp;<!-- /react-text --><!-- react-text: 459 -->600643<!-- /react-text --></div>
                <div><!-- react-text: 461 -->奥瑞德<!-- /react-text --><!-- react-text: 462 -->&nbsp;<!-- /react-text --><!-- react-text: 463 -->600666<!-- /react-text --></div>
                <div><!-- react-text: 465 -->安徽合力<!-- /react-text --><!-- react-text: 466 -->&nbsp;<!-- /react-text --><!-- react-text: 467 -->600761<!-- /react-text --></div>
                <div><!-- react-text: 469 -->安信信托<!-- /react-text --><!-- react-text: 470 -->&nbsp;<!-- /react-text --><!-- react-text: 471 -->600816<!-- /react-text --></div>
                <div><!-- react-text: 473 -->爱柯迪<!-- /react-text --><!-- react-text: 474 -->&nbsp;<!-- /react-text --><!-- react-text: 475 -->600933<!-- /react-text --></div>
                <div><!-- react-text: 477 -->奥康国际<!-- /react-text --><!-- react-text: 478 -->&nbsp;<!-- /react-text --><!-- react-text: 479 -->603001<!-- /react-text --></div>
                <div><!-- react-text: 481 -->爱普股份<!-- /react-text --><!-- react-text: 482 -->&nbsp;<!-- /react-text --><!-- react-text: 483 -->603020<!-- /react-text --></div>
                <div><!-- react-text: 485 -->安德利<!-- /react-text --><!-- react-text: 486 -->&nbsp;<!-- /react-text --><!-- react-text: 487 -->603031<!-- /react-text --></div>
                <div><!-- react-text: 489 -->爱婴室<!-- /react-text --><!-- react-text: 490 -->&nbsp;<!-- /react-text --><!-- react-text: 491 -->603214<!-- /react-text --></div>
                <div><!-- react-text: 493 -->奥翔药业<!-- /react-text --><!-- react-text: 494 -->&nbsp;<!-- /react-text --><!-- react-text: 495 -->603229<!-- /react-text --></div>
              </div>
            </div>
            <div style="font-size: 12px; padding-top: 10px;">
              当前价: 19.23元
            </div>
          </div>
          <div class="right">
            <div>行情></div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 10px;">
      <card>
        <div slot="content" style="padding: 1rem 0.625rem; display: flex; background-color: #fff;">
          <div style="width: 5.625rem; padding-top: 0.625rem; display: inline-block;">名义本金:</div>
          <div style="flex: 1;">
            <div style="position: relative; padding-top: 10px;">
              <div style="height: 30px; position: relative; padding-left: 2px; background-color: white; border: 1px solid #ddd; display: flex;">
                <div style="flex: 5;">
                  <!-- <input type="number" min="50" name="inquiry" class="inquiry_input"> -->
                  <input type="text" name="inquiry" placeholder="自定义金额50万起" v-model="nominalCapital" class="inquiry_input">
                </div>
                <div style="flex: 2; text-align: center; padding-top: 2px;">
                  <span>万元</span>
                </div>
              </div>
            </div>
            <div style="padding-top: 10px;">
              <checker
                v-model="nominalCapital"
                default-item-class="nominalCapital-item"
                selected-item-class="nominalCapital-item-selected"
                >
                <checker-item v-for="item in nominalCapitalChecker" :key="item.vaue" :value="item.value">{{item.key}}</checker-item>
              </checker>
            </div>
          </div>
        </div>
      </card>
    </div>
    <div style="margin-top: 10px;">
      <card>
        <div slot="content" style="padding: 1rem 0.625rem; display: flex; background-color: #fff;">
          <checker
          v-model="exerciseCycle"
          default-item-class="exerciseCycle-item"
          selected-item-class="exerciseCycle-item-selected"
          >
          <template v-for="item in exerciseCycleChecker" >
            <checker-item :key="item.vaue" :value="item.value">
              <template :props="item">
                <div style="display: flex;">
                  <div style="flex: 1;">
                    <p style="font-size: 1rem;">{{item.key}}</p>
                    <p style="font-size: 12px;">期限</p>
                  </div>
                  <div style="flex: 1;">
                    <p style="font-size: 1rem;">9.85%</p>
                    <p style="font-size: 12px;">权利金比例</p>
                  </div>
                </div>
              </template>
            </checker-item>
          </template>
        </checker>
      </div>
      </card>
    </div>
    <card style="background-color: #fbf9fe; border: none;">
      <div slot="content" style="padding: 1rem 0.625rem; display: flex;">
        <x-button type="default" style="border-radius: 5px; background-color: #ddd;">询价</x-button>
      </div>
    </card>
  </div>
</template>

<script>
import { Card, XInput, XButton, Checker, CheckerItem, Icon } from 'vux'
export default {
  data () {
    return {
      targetStock: 'aa',
      nominalCapital: null,
      nominalCapitalChecker: [{
        key: '50万',
        value: 50
      }, {
        key: '100万',
        value: 100
      }, {
        key: '200万',
        value: 200
      }, {
        key: '300万',
        value: 300
      }, {
        key: '500万',
        value: 500
      }],
      exerciseCycle: null,
      exerciseCycleChecker: [{
        key: '1月',
        value: 30
      }, {
        key: '2月',
        value: 60
      }, {
        key: '3月',
        value: 90
      }, {
        key: '6月',
        value: 180
      }],
    }
  },
  components: { Card, XInput, XButton, Checker, CheckerItem, Icon },
  methods: {
    inputChange(value) {
      console.log(value, 'value...');
    },
    clearStock() {
      this.targetStock = '';
      console.log('aaaaaaaaaaa.')
    }
  }
}
</script>

<style scoped>
.weui-cells {
  margin-top: 0em !important;
}
.announcement {
  min-height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.card-demo-content01 {
  padding: 1rem;
}
.card-deal-flex {
  display: flex;
}
.deal_left {
  display: inline-block;
  width: 5.6rem;
}
.deal_other_right {
  flex: 1;
  display: inline-block;
}
.size0_75 {
  font-size: 0.75rem;
}
.size1 {
  font-size: 1rem;
}
.size0_75_block {
  font-size: 0.75rem;
  display: block;
}
.size_0_625_block {
  font-size: 0.625rem;
  display: block;
}
.inquiry_block {
  display: flex;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.inquiry_input {
  height: 1.875rem ;
  border: none;
  margin-left: 2px;
  outline: none;
  font-size: 1rem;
}
.inquiry_input.focus {
  outline: none;
  border:  none !important;
}
.right {
  flex: 3;
  display: inline-block;
  text-align: right;
  font-size: 12px;
  padding-top: 20px;
}
.nominalCapital-item {
  width: 80px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.nominalCapital-item-selected {
  background: #ffffff url(/static/img/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
.exerciseCycle-item {
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.exerciseCycle-item-selected {
  background: #ffffff url(/static/img/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
.weui-panel:before {
  border: none;
}
.weui-panel:after {
  border: none;
}
</style>

