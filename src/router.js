import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'; // Import your components
import AboutPage from './views/AboutPage.vue';
import ProjectPage from './views/ProjectPage.vue';
import ThrowingPage from './views/ThrowingPage.vue';
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'ProjectPage',
    component: ProjectPage
  },
  {
    path: '/throwing',
    name: 'ThrowingPage',
    component: ThrowingPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
