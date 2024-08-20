import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'; // Import your components
import ProjectPage from './views/ProjectPage.vue';
import ThrowingPage from './views/ThrowingPage.vue';
const routes = [
  {
    path: '/portfolio-page',
    name: 'HomePage',
    component: HomePage
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
