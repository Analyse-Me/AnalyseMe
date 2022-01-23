import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Quizzes from '@/views/Quizzes.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    component: Quizzes,
  },
]

export default routes
