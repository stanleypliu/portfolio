<template>
 <div class="project-showcase">
   <h2>My work.</h2>
   <div class="project-showcase__projects">
    <project-showcase-item
     v-for="(project, index) in projects"
     :key="index"
     :img="project.picture"
     :alt="project.alt"
     :desc="project.desc"
     :title="project.title"
     :link="project.link"
    />
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
            for and exchange little-used currencies with each other, with ActionCable
            chat functionality and real-time currency conversion via calls made to
            the Fixer API, and integrating Stripe for mock payments.
            Built with jQuery and vanilla JavaScript on Rails, 
            backed by a PostgreSQL database. Consumes the Mapbox API for geolocation. 
            `,
      link: "http://www.revonew.xyz"
    },
    {
     picture: images["justbikes"],
     title: 'JustBikes',
     alt: "AirBnB for renting bicycles",
     desc: `An AirBnB style website allowing users to both book and rent
            out bicycles, sorting by geographical distance to user. 
            Built with JavaScript and Rails, with a PostgreSQL database.
            Consumes the Mapbox API.
            `,
      link: "http://justbikes.herokuapp.com/"
    },
   ],
  };
 },
};
</script>
