import { createApp } from 'vue'
import App from './App.vue'
import CatalogSection from '../src/components/CatalogSection.vue'
import CarouselUniversal from './components/CarouselUniversal.vue'
import CardsItem from '../src/components/CardsItem.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App).use(router)

app.component('CatalogSection', CatalogSection)

app.component('CarouselUniversal', CarouselUniversal)

app.component('CardsItem', CardsItem)

app.mount('#app')