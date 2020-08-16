<template>
    <li class="navbar__link">
        <div 
            :class="[ id % 2 == 0 ? 'navbar__item' : 'navbar__item--reverse' ]"
        >
            <template v-if="link.image">
                    <img 
                        class="navbar__image"
                        :id="`navbar__image--${id}`"
                        :src="link.image" 
                        :alt="`Navigation image for ${link.name}`" 
                        v-if="hover"
                    >
            </template>
            <template v-else>
                    <svg height='100px' width='100px'  fill="#FFFFFF" 
                    id="navbar__svg" v-if="hover"
                    xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" 
                    viewBox="0 0 100 100" x="0px" y="0px">
                    <title>Artboard 9</title>
                    <path d="M12.82,96.74H87.18A8.83,8.83,0,0,0,96,87.91V40.69
                    a2.5,2.5,0,0,0-.89-1.91L82.8,28.38V10.25a7,7,0,0,0-7-7H24.69
                    a7,7,0,0,0-7,7V28L4.89,38.78A2.5,2.5,0,0,0,4,40.69V87.91
                    A8.83,8.83,0,0,0,12.82,96.74Zm74.35-5H12.82A3.83,3.83,0,0,1,
                    9,87.91V45.46L37.5,65.62,17.27,81.1a2.5,2.5,0,1,0,3,4L41.78,
                    68.64l7,5a2.5,2.5,0,0,0,2.89,0l7-5L80.19,85.07a2.5,2.5,0,1,
                    0,3-4L63,65.62l28-19.8v42.1A3.83,3.83,0,0,1,87.18,91.74Z
                    m2.43-51.06L82.8,45.49V34.92ZM24.69,8.26H75.81a2,2,0,0,1,2,
                    2V49L50.25,68.51,22.7,49V10.25A2,2,0,0,1,24.69,8.26Zm-7,
                    37.23-7.08-5,7.08-6ZM50,55.67h.64a2.5,2.5,0,0,0,0-5H50
                    A15.94,15.94,0,1,1,65.94,34.73V39a2.79,2.79,0,0,1-5.57,0
                    V34.73a10.4,10.4,0,1,0-4,8.13A7.78,7.78,0,0,0,70.94,39
                    V34.73A20.94,20.94,0,1,0,50,55.67ZM50,40.1a5.37,5.37,0,1,1,
                    5.37-5.37A5.37,5.37,0,0,1,50,40.1Z"></path></svg>
            </template> 
            <h2 
                class="navbar__text"
                @mouseenter="hover = true"
                @mouseleave="hover = false"
            >
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
                default: {
                    type: ''
                }
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
