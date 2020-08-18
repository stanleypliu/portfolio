<template>
    <div class="hero">
        <div class="hero__bracket"></div>
        <div class="hero__text">
            <h1>{{ name }}</h1>
            <h3>{{ desc }}</h3>
            <div class="hero__divider"></div>
        </div>
        <div class="hero__bracket"></div>
    </div>
</template>

<script>
    export default {
      name: 'Hero',
      data() {
          return {
              name: 'STANLEY LIU',
              desc: 'UK-BASED FULL STACK DEVELOPER'
          }
      },  
    }
</script>

