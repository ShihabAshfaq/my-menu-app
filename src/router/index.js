import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EventsPage from '../views/EventsPage.vue';
import SpecialsPage from '../views/SpecialsPage.vue';
import MenuPage from '../views/MenuPage.vue';
import SuggestionsPage from '../views/SuggestionsPage.vue';
import AboutUsPage from '../views/AboutUsPage.vue';
import EventsComponent from '../components/EventsComponent.vue';
import SpecialsComponent from '../components/SpecialsComponent.vue';
import SuggestionComponent from '../components/SuggestionComponent.vue';
import ManagerLogin from '../views/ManagerLogin.vue';
import UserLogin from '../views/UserLogin.vue';
import UserRegister from '../views/UserRegister.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsPage
  },
  {
    path: '/specials',
    name: 'Specials',
    component: SpecialsPage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage
  },
  {
    path: '/suggestions',
    name: 'Suggestions',
    component: SuggestionsPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('loggedIn')) {
        next();
      } else {
        next({ path: '/user-login', query: { redirect: to.fullPath } });
      }
    }
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUsPage
  },
  {
    path: '/manager-login',
    name: 'ManagerLogin',
    component: ManagerLogin
  },
  {
    path: '/user-login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/manage-events',
    name: 'ManageEvents',
    component: EventsComponent,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('managerLoggedIn')) {
        next();
      } else {
        next({ path: '/manager-login', query: { redirect: to.fullPath } });
      }
    }
  },
  {
    path: '/manage-specials',
    name: 'ManageSpecials',
    component: SpecialsComponent,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('managerLoggedIn')) {
        next();
      } else {
        next({ path: '/manager-login', query: { redirect: to.fullPath } });
      }
    }
  },
  {
    path: '/manage-suggestions',
    name: 'ManageSuggestions',
    component: SuggestionComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
