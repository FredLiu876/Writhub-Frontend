<template lang="pug">
    v-card.project-cards
        v-progress-linear(
            height="4"
            color="#00BFA6"
        )
        v-img(
            :src="require('@/assets/' + coverArt)"
            height="200"
            width="100%"
        )
        v-card-title.title {{ name }}
        v-card-subtitle.description {{ description }}
        v-card-text.body-text() {{ text }}
</template>

<script>
    export default {
        name: "Project Card",
        data: () => {
            return {

            }
        },
        props: {
            name: String,
            description: String,
            text: String,
            coverArt: String
        }
    }
</script>

<style scoped>
    .project-cards {
        width: calc((100% - 82px) / 3);
    }
    .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.87);
    }
    .description {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.6);
        text-align: left;
        margin-top: -8px;
    }
    .body-text {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.6);
        text-align: left;
        margin-top: 4px;
    }
</style>