import Vue from 'vue'
import Router from 'vue-router'
import calendar from './components/Calendar'
import Schedule from './components/Schedule'
import Role from './components/Role'
import Work from './components/Work'
import Colleague from './components/Colleague'
import Lists from './components/calender/Lists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: calendar
    },
    {
      path: '/calendar',
      component: calendar,
      children: [{
        path: '/calendar/setted',
        component: Lists
      }]
    },
    {
      path: '/role',
      component: Role
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/colleague',
      component: Colleague
    },
    {
      path: '/schedule',
      component: Schedule
    }
  ]
})
