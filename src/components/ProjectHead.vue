<template lang="pug">
    div
        .title
        v-img(
            :src="require('@/assets/' + coverArt)"
        )
</template>

<script>
    export default {
        data: () => {
            return {
                
            }
        },
        props: {
            coverArt: String,
        }
    }
</script>

<style scoped>
    .project-image {
        margin-top: 44px;
    }
</style>