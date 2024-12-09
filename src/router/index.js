import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import DashBoard from '../views/DashBoard.vue';

// Definisikan semua rute di sini
const routes = [
  {
    path: '/', 
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/dashboard', 
    name: 'Dashboard',
    component: DashBoard
  },
  {
    path: '/about', 
    name: 'About',
    component: AboutPage
  }
];

// Membuat instance router dengan konfigurasi
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
