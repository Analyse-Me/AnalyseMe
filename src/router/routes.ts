import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Quizzes from '@/views/Quizzes.vue'
import Quiz from '@/views/Quiz.vue'

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
  {
    path: '/quiz/:id',
    name: 'Quiz',
    component: Quiz,
  },
]

export default routes
