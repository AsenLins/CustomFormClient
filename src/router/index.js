import Vue from 'vue'
import Router from 'vue-router'

import Apply from '../views/apply/apply'
import Main from '../views/main/main';
import MyApply from '../views/myApply/myApply';
import MyApproval from '../views/myApproval/myApproval';
import ApprovalDetail from '../views/approvalDetail/approvalDetail';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },{
      path:"/apply",
      name:"apply",
      component:Apply,
      children:[]
    },
    {
      path:"/myApproval",
      name:"myApproval",
      component:MyApproval,
    },
    {
      path:"/myApply",
      name:"myApply",
      component:MyApply,

    },{
      path:"/approvalDetail",
      name:"approvalDetail",
      component:ApprovalDetail
    }







  ]
})
