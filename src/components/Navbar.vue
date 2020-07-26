<template>
    <div >
        <ul class="navbar">
            <li v-for="(link, index) in links" :key="index">
                <h2><a :href="link.url">{{ link.name }}</a></h2>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Navbar',
        mixins: [],
        data() {
            return {
                links: [{ url: '/projects', name: 'Projects' }, 
                        { url: '/about', name: 'About' },
                        { url: '/contact', name: 'Contact Me'}]
            }
        },
        methods: {
            hoverOver() {

            }
        }
    }
</script>
