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
                links: [{ url: '/projects', name: 'PROJECTS', image: revonew }, 
                        { url: '/about', name: 'ABOUT', image: headshot },
                        { url: '/contact', name: 'CONTACT ME' }]
            }
        }
    }
</script>

