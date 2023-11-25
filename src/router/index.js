import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatPage from '../views/ChatPage.vue';
import RegPage from '../views/RegPage.vue';
import UserProfile  from '../views/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat/:email',
    name: 'chat',
    component: ChatPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegPage
  },
  {
    path: '/profile/:email',
    name: 'profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
