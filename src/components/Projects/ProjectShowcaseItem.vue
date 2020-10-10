<template>
 <div class="project-showcase__item">
  <img
   class="project-showcase__picture"
   :src="img"
   :alt="alt"
   @mouseenter="hover = true"
   @mouseleave="hover = false"
  />
  <h2>{{ title }}</h2>
  <div class="project-showcase__project-desc" v-show="hover">
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
  }
 },
 data() {
  return {
   hover: false,
  };
 }
};
</script>
