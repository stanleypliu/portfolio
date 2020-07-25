<template>
    <div class="hero">
        <div class="hero__text">
            <h2>{{ msg }}</h2>
            <h1>{{ name }}</h1>
            <h3>{{ desc }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'Hero',
      data() {
          return {
              msg: 'Hello, I\'m',
              name: 'Stanley',
              desc: 'A UK-based full stack developer'
          }
      },  
    }
</script>

