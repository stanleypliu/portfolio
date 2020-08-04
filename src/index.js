// Compiler-included build of Vue
import Vue from 'vue/dist/vue.esm.js';

// Components
import Hero from './components/Hero.vue';
import NavbarVue from './components/Navbar/NavbarVue.vue';

document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('v-app')) {
      Vue.prototype.$eventHub = new Vue()
    
      const app = new Vue({
        el: '#v-app',
        components: {
            Hero,
            NavbarVue
        }
      })

      
    }
  })
  
