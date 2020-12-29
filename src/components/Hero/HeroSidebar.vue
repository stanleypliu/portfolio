<template>
  <div class="hero-sidebar">
    <div class="hero-sidebar__text">
      <template v-if="this.$route.path === '/'">
        <h1>{{ name }}</h1>
        <hr />
        <h3 class="hero-sidebar__description">{{ desc }}</h3>
        <h3 class="hero-sidebar__skills">{{ skills }}</h3>
      </template>
      <template v-else>
        <router-link to="/"><h3>Home</h3></router-link>
        <router-link to="/projects"><h3>Projects</h3></router-link>
        <router-link to="/about"><h3>About</h3></router-link>
        <router-link to="/contact-me"><h3>Contact Me</h3></router-link>
      </template>
    </div>

    <div class="hero-sidebar__footer">
      <small>Coded with <s>hatred</s>💙 in London</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSidebar',
  mounted() {
    console.log(this.$router.currentRoute)
  },
  data() {
    return {
      name: 'Stanley Liu',
      desc: 'Full Stack Web Developer',
      skills: 'Vue | Rails | SQL  SCSS'
    }
  }
}
</script>

