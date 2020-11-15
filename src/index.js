// Compiler-included build of Vue
import Vue from 'vue/dist/vue.esm.js';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Components
import HeroSidebar from './components/Hero/HeroSidebar.vue';
import HomepageNavbar from './components/Navbar/HomepageNavbar.vue';
import ProjectShowcase from './components/Projects/ProjectShowcase.vue';


//Routes

const routes = [
  {
    path: '/projects',
    component: ProjectShowcase
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
            HeroSidebar,
            HomepageNavbar
        }
      })

      
    }
  })
  
