<template>
  <div class="hero-sidebar">
    <div class="hero-sidebar__text">
      <template v-if="this.$route.path === '/' || homeElVisible">
        <h1>{{ name }}</h1>
        <hr />
        <h3 class="hero-sidebar__description">{{ desc }}</h3>
        <h3 class="hero-sidebar__skills">{{ skills }}</h3>
      </template>
      <template v-else>
        <router-link
          v-for="(route, index) in this.$router.options.routes"
          :key="index"
          :to="route.path"
        >
          <h3>{{ route.path | turnIntoName }}</h3>
        </router-link>
      </template>
    </div>

    <div class="hero-sidebar__footer">
      <small>Coded with <s>hatred</s>💙 in London - 2020</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSidebar',
  data() {
    return {
      name: 'Stanley Liu',
      desc: 'Full Stack Web Developer',
      skills: '',
      homeElVisible: undefined
    }
  },
  filters: {
    turnIntoName: function (path) {
      if (path === "/") { return 'Home' }

      if (path.match(/-/)) {
        const pathName = path.slice(1)
        return pathName.split('-').map((str) => {
          return str.charAt(0).toUpperCase() + str.slice(1)
        }).join(' ')
      }
      else {
        return path.charAt(1).toUpperCase() + path.slice(2)
      }
    }
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5
    }

    const homeEl = document.querySelector('.container--home')

    const vm = this

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        vm.homeElVisible = entry.isIntersecting
      })
    }

    const watchHomeElem = new IntersectionObserver(callback, options)
    watchHomeElem.observe(homeEl)
  },
  methods: {
    showAndScrollToDiv(event) {
      console.log(event.target)
      //    const routerView = document.querySelector(".container--router");
      //    routerView.style.display = "flex";
      //    routerView.scrollIntoView({ behavior: "smooth" });
    }
  },
}
</script>

