<template>
    <nav>
        <ul class="navbar">
            <navbar-item
                v-for="(link, index) in links"
                :link="link"
                :id="index"
                :key="index"
            />
        </ul>
    </nav>
</template>

<script>
    import NavbarItem from './NavbarItem.vue';
    import revonew from '../../../assets/images/photos/revonew.png';
    import headshot from '../../../assets/images/photos/headshot.jpg';

    export default {
        name: 'NavbarVue',
        components: {
            NavbarItem
        },
        data() {
            return {
                links: [{ name: 'Projects', route: '/projects', image: revonew }, 
                        { name: 'About', route: '/about', image: headshot },
                        { name: 'Contact Me', route: '/contact-me' }]
            }
        }
    }
</script>

