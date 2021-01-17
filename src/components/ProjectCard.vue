<template lang="pug">
    v-hover(
        v-slot:default="{ hover }"
    )
        v-card.project-cards(
            :style="{ boxShadow: hover ? '0 7px  8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12) !important' : '0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12) !important'}"
            @click="projectClicked"
        )
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
            id: String,
            name: String,
            description: String,
            text: String,
            coverArt: String
        },
        methods: {
            projectClicked: function() {
                location.pathname = '/project/' + this.name + '/' + this.id
            }
        }
    }
</script>

<style>
    .v-progress-linear__background {
        opacity: 1 !important;
    }
</style>

<style scoped>
    .project-cards {
        width: calc((100% - 82px) / 3);
        cursor: pointer;
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
