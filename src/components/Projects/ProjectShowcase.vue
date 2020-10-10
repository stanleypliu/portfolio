<template>
 <div class="project-showcase">
  <div class="container">
   <h2>My Work</h2>
   <hr/>
   <div class="project-showcase__pictures">
    <project-showcase-item
     v-for="(project, index) in projects"
     :key="index"
     :img="project.picture"
     :alt="project.alt"
     :desc="project.desc"
     :title="project.title"
    />
   </div>
  </div>
 </div>
</template>

<script>
import images from "../../../assets/images/photos/*.png";
import ProjectShowcaseItem from "./ProjectShowcaseItem.vue";

export default {
 name: "ProjectShowcase",
 components: { ProjectShowcaseItem },
 data() {
  return {
   projects: [
    {
     picture: images["revonew"],
     title: 'Revonew',
     alt: "Currency-exchange marketplace MVP",
     desc: `A currency-exchange marketplace MVP to allow users to search
            for and exchange little-used currencies with each other, with chat 
            functionality and real-time currency conversion via calls made to
            the Fixer API. 
            Built with jQuery and vanilla JavaScript on Rails, 
            backed by a PostgreSQL database. Consumes the Mapbox API for geolocation. 
            `,
    },
    {
     picture: images["justbikes"],
     title: 'JustBikes',
     alt: "AirBnB for renting bicycles",
     desc: `An AirBnB style website allowing users to both book and rent
            out bicycles, sorting by geographical distance to user. 
            Built with JavaScript and Rails, with a PostgreSQL database.
            `,
    },
   ],
  };
 },
};
</script>
