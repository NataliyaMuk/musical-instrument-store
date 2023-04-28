import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import CatalogSection from '../components/CatalogSection.vue'
import ProductPage from '../components/ProductPage'
import BlogPage from '../components/BlogPage'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/catalogsection',
    name: 'CatalogSection',
    component: CatalogSection
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router