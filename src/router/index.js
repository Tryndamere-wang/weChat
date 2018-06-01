import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu'

//home
import options from "@/components/home/options"
import latestNews from "@/components/home/latestNews"
import information from "@/components/home/information"
import informationDetail from "@/components/home/informationDetail"
import announcement from "@/components/home/announcement"
import optimalTrading from "@/components/home/optimalTrading"

//inquiry
import inquiry from "@/components/inquiry/inquiry"

//mine
import mine from "@/components/mine/mine"
import capitalDetails from "@/components/mine/capitalDetails"
import forgetPd from "@/components/mine/forgetPd"
import login from "@/components/mine/login"
import registered from "@/components/mine/registered"

//transaction
import transaction from "@/components/transaction/transaction"
import clearing from "@/components/transaction/clearing"
import position from "@/components/transaction/position"
import subScription from "@/components/transaction/subScription"


Vue.use(Router)

const homeRouter = {
  path: '/home',
  meta: {
    title: '首页',
    menu: true,
    link: '/home/options',
    img: '/static/img/home.svg'
  },
  component: menu,
  children: [{
    path: '/home/options',
    name: 'options',
    meta: {
      title: '场外期权',
      header: true
    },
    component: options
  }, {
    path: '/home/latestNews',
    name: 'latestNews',
    meta: {
      title: '最新动态',
      header: true
    },
    component: latestNews
  }, {
    path: '/home/information',
    name: 'information',
    meta: {
      title: '资讯',
      header: true
    },
    component: information
  }, {
    path: '/home/informationDetail',
    name: 'informationDetail',
    meta: {
      title: '资讯详情',
      header: true
    },
    component: informationDetail
  }, {
    path: '/home/announcement',
    name: 'announcement',
    meta: {
      title: '公告',
      header: true
    },
    component: announcement
  }, {
    path: '/home/optimalTrading',
    name: 'optimalTrading',
    meta: {
      title: '最优交易',
      header: true
    },
    component: optimalTrading
  }]
};

const inquiryRouter = {
  path: '/inquiry',
  meta: {
    title: '询价',
    menu: true,
    link: '/inquiry/inquiry',
    img: '/static/img/cash.svg'
  },
  component: menu,
  children: [{
    path: '/inquiry/inquiry',
    name: 'inquiry',
    meta: {
      title: '询价',
      header: true
    },
    component: inquiry
  }]
};

const transactionRouter = {
  path: '/transaction',
  meta: {
    title: '交易',
    menu: true,
    link: '/transaction/transaction/subScription',
    img: '/static/img/camera.svg'
  },
  component: menu,
  children: [{
    path: '/transaction/transaction',
    name: 'transaction',
    meta: {
      title: '交易',
      header: true
    },
    component: transaction,
    children: [{
      path: '/transaction/transaction/subScription',
      name: 'subScription',
      meta: {
        title: '交易',
        header: true
      },
      component: subScription
    }, {
      path: '/transaction/transaction/position',
      name: 'position',
      meta: {
        title: '交易',
        header: true
      },
      component: position
    }, {
      path: '/transaction/transaction/clearing',
      name: 'clearing',
      meta: {
        title: '交易',
        header: true
      },
      component: clearing
    }]
  }]
};

const mineRouter = {
  path: '/mine',
  meta: {
    title: '我的',
    menu: true,
    link: '/mine/mine',
    img: '/static/img/calendar.svg'
  },
  component: menu,
  children: [{
    path: '/mine/mine',
    name: 'mine',
    meta: {
      title: '我的',
      header: true
    },
    component: mine
  }, {
    path: '/mine/login',
    name: 'login',
    meta: {
      title: '登录',
      header: true
    },
    component: login
  }, {
    path: '/mine/forgetPd',
    name: 'forgetPd',
    meta: {
      title: '忘记密码',
      header: true
    },
    component: forgetPd
  }, {
    path: '/mine/registered',
    name: 'registered',
    meta: {
      title: '注册',
      header: true
    },
    component: registered
  }, {
    path: '/mine/capitalDetails',
    name: 'capitalDetails',
    meta: {
      title: '资金明细',
      header: true
    },
    component: capitalDetails
  }]
};

const router = [{
  path: '/',
  redirect: '/home/options',
  hidden: true
}, homeRouter, inquiryRouter, transactionRouter, mineRouter]



export default new Router({
  routes: router
})
