<template>
 <nav class="homepage-navbar">
  <div class="homepage-navbar__projects" :class="activeClass"></div>
  <ul class="navbar">
   <navbar-item
    v-for="(link, index) in links"
    :link="link"
    :id="index"
    :key="index"
    @hover="setHover"
    @no-hover="unsetHover"
   />
  </ul>
  <div class="homepage-navbar__justbikes" :class="activeClass"></div>
 </nav>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
import revonew from "../../../assets/images/photos/revonew.png";
import headshot from "../../../assets/images/photos/headshot.jpg";

export default {
 name: "HomepageNavbar",
 components: {
  NavbarItem,
 },
 data() {
  return {
   links: [
    { name: "Projects", route: "/projects" },
    { name: "About", route: "/about" },
    { name: "Contact Me", route: "/contact-me", svg: true },
   ],
   activeClass: ''
  };
 },
 methods: {
     setHover() {
         this.activeClass = 'active'
     },
     unsetHover() {
         this.activeClass = ''
     }
 },
};
</script>

