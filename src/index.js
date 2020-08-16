// Compiler-included build of Vue
import Vue from 'vue/dist/vue.esm.js';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Components
import Hero from './components/Hero.vue';
import NavbarVue from './components/Navbar/NavbarVue.vue';
import ProjectCarousel from './components/Carousel/ProjectCarousel.vue';


//Routes

const routes = [
  {
    path: '/projects',
    component: ProjectCarousel
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('./views/About.vue');
    }
  },
  {
    path: '/contact-me',
    component: function () {
      return import('./views/ContactMe.vue');
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('v-app')) {
      Vue.prototype.$eventHub = new Vue()
    
      const app = new Vue({
        el: '#v-app',
        router,
        components: {
            Hero,
            NavbarVue
        }
      })

      
    }
  })
  
