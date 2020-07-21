<template>
    <div class="container hero">
        <h1>Projects</h1>
        <h1>{{ msg }}</h1>
        <h1>About Me</h1>
    </div>
</template>

<script>
    export default {
      name: 'Hero',
      data() {
          return {
              msg: 'Hello, I\'m Stanley'
          }
      },  
    }
</script>

