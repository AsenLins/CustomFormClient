import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apply from '../views/apply/apply'
import Main from '../views/main/main';
import MyApply from '../views/myApply/myApply';
import MyApproval from '../views/myApproval/myApproval';

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
      component:Apply
    },
    {
      path:"/myApproval",
      name:"myApproval",
      component:MyApproval
    },
    {
      path:"/myApply",
      name:"myApply",
      component:MyApply
    }




  ]
})
