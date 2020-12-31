<template>
  <div class="project-showcase__item">
    <img class="project-showcase__picture" :src="img" :alt="alt" />
    <div class="project-showcase__project-desc">
      <a :href="link" target="_blank"
        ><h3>{{ title }}</h3></a
      >
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectShowcaseItem",
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Screenshot of project homepage",
    },
    desc: {
      type: String,
      default: "Project description",
    },
    title: {
      type: String,
      default: 'Project title'
    },
    link: {
      type: String
    }
  },
  data() {
    return {
      hover: false,
    }
  }
};
</script>
