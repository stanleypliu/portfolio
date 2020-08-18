<template>
    <div class="project-showcase">
        <h2>PROJECTS</h2>

            <div class="project-showcase__pictures">
                <img class="project-showcase__picture" :src="revonewPic" alt="Currency-exchange marketplace MVP">
                <img class="project-showcase__picture" :src="justbikesPic" alt="AirBnB clone for renting bicycles">
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
