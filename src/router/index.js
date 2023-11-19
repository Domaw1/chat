import { createRouter, createWebHistory } from 'vue-router'
import LogView from '../views/LogView.vue'
import ChatPage from '../views/ChatPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LogView
  },
  {
    path: '/chat/:username',
    name: 'chat',
    component: ChatPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
