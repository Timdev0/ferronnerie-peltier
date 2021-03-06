import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import notFound from './views/404.vue';
import Galerie from './views/Galerie.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: Galerie,
    },
    {
      path: '/404',
      name: '404',
      component: notFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
