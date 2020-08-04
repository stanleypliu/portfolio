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
    import images from '../../../assets/images/photos/*.png';

    export default {
        name: 'NavbarVue',
        components: {
            NavbarItem
        },
        data() {
            return {
                links: [{ url: '/projects', name: 'Projects', image: images['revonew'] }, 
                        { url: '/about', name: 'About', image: '' },
                        { url: '/contact', name: 'Contact Me' }]
            }
        }
    }
</script>

