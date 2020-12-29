<template>
 <nav class="homepage-navbar">
  <div class="homepage-navbar__projects--revonew" :class="activeClass"></div>
  <ul class="navbar">
   <navbar-item
    v-for="(link, index) in links"
    :link="link"
    :id="index"
    :key="index"
    @hover="setHover($event)"
    @no-hover="unsetHover()"
   />
  </ul>
  <div class="homepage-navbar__projects--justbikes" :class="activeClass"></div>
  <div class="homepage-navbar__headshot" :class="activeClass"></div>
 </nav>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
import revonew from "../../../assets/images/photos/revonew.png";
import headshot from "../../../assets/images/photos/headshot.jpg";

export default {
 name: "HomepageNavbar",
 components: {
  NavbarItem
 },
 data() {
  return {
   links: [
    { name: "PROJECTS", route: "/projects" },
    { name: "ABOUT", route: "/about" },
    { name: "CONTACT ME", route: "/contact-me", svg: true },
   ],
   activeClass: ''
  };
 },
 methods: {
     setHover($event) {
        this.activeClass = `active--${$event.toLowerCase()}`
     },
     unsetHover() {
        this.activeClass = ''
     }
 },
};
</script>

