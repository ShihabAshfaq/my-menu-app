import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-next';

const app = createApp(App);

app.use(router);

// Register BootstrapVue components globally
app.component('BCarousel', BCarousel);
app.component('BCarouselSlide', BCarouselSlide);

// Clear session storage on every page load unless "keepLoggedIn" is set
router.beforeEach((_to, _from, next) => {
  if (!sessionStorage.getItem('keepLoggedIn')) {
    sessionStorage.removeItem('loggedIn');
  }
  next();
});

app.mount('#app');
