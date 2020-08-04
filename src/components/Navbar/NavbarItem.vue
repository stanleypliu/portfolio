<template>
    <li class="navbar__link">
        <div 
            :class="[ id % 2 == 0 ? 'navbar__item' : 'navbar__item--reverse' ]"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
        >
            <transition name="fade-in">
                <template v-if="link.image">
                    <img 
                        class="navbar__image"
                        :src="link.image" 
                        :alt="`Navigation image for ${link.name}`" 
                        v-show="hover"
                    >
                </template>
                <template v-else>
                    <svg
                        class="navbar__icon"
                        :alt="`Navigation icon for ${link.name}`" 
                        v-show="hover"
                    >
                    </svg>
                </template>
            </transition>
            <h2 class="navbar__text">
                <a :href="link.url">
                    {{ link.name }}
                </a>
            </h2>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'NavbarItem',
        props: {
            link: {
                type: Object, 
            },
            id: Number
        },
        data() {
            return {
                hover: false
            }
        }
    }
</script>
