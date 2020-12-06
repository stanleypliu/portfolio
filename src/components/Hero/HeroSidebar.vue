<template>
    <div class="hero-sidebar">
        <div class="hero-sidebar__text">
            <h1>{{ name }}</h1>
            <hr>
            <h3 class="hero-sidebar__description">{{ desc }}</h3>
            <h3 class="hero-sidebar__skills">{{ skills }}</h3>
        </div>

        <div class="hero-sidebar__footer">
            <small>Coded with <s>hatred</s>💙 and care in London 🙌</small>
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
              skills: 'Vue | Rails | SQL | SCSS'
          }
      }
    }
</script>

