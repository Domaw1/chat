import { createRouter, createWebHashHistory } from 'vue-router'
import LogPage from '../views/LogPage.vue'
import ChatPage from '../views/ChatPage.vue';
import RegPage from '../views/RegPage.vue';
import UserProfile  from '../views/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LogPage
  },
  {
    path: '/im',
    name: 'chat',
    component: ChatPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegPage
  },
  {
    path: '/profile/:name',
    name: 'profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
