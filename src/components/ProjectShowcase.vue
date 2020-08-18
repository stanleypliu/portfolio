<template>
    <div class="project-showcase">
        <h2>Showcase of my work</h2>
        <div class="project-showcase__pictures">
            <img :src="revonewPic" alt="">
            <img :src="justbikesPic" alt="">
        </div>
    </div>
</template>

<script>
    import images from '../../assets/images/photos/*.png';

    export default {
        name: 'ProjectShowcase',
        data() {
            return {
                revonewPic: images['revonew'],
                justbikesPic: images['justbikes']
            }
        },
    }
</script>
