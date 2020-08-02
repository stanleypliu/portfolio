<template>
    <nav>
        <ul class="navbar">
            <li v-for="(link, index) in links" :key="index" class="navbar__link">
                <div 
                    :class="[ index % 2 == 0 ? 'navbar__item' : 'navbar__item--reverse' ]"
                    @mouseenter="setIndex(index)"
                    @mouseleave="unsetIndex()"
                >
                    <img 
                        :src="link.image" 
                        :alt="`Navigation icon for ${link.name}`" 
                        class="navbar__image"
                    >
                    <h2 class="navbar__text"><a :href="link.url">{{ link.name }}</a></h2>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarVue',
        data() {
            return {
                links: [{ url: '/projects', name: 'Projects', image: '../../assets/images/revonew.png' }, 
                        { url: '/about', name: 'About', image: '' },
                        { url: '/contact', name: 'Contact Me', image: '../../assets/images/email_icon.svg' }],
                hover: false,
                hoverIndex: undefined
            }
        },
        methods: {
            setIndex(index) {
                this.hover = true;
                // this.hoverIndex = index;
            },
            unsetIndex() {
                this.hover = false;
                // this.hoverIndex = undefined;
            }
        }
    }
</script>

