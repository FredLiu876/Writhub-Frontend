<template lang="pug">
    div(
        :style="{width: this.width + 'px', height: this.height + 'px'}"
        v-resize="getDimensions"
    )
        v-row.set-vh
            v-col(
                lg="2"
                cols="1"
            )
            v-col.set-vh(
                lg="8"
                cols="10"
            )
                .initial-height
                    div
                        span.title {{ projectInfo.name }}
                        v-img.project-image(
                            :src="require('@/assets/' + projectInfo.coverArt)"
                            height="200"
                        )
                        span.project-description Description
                        .align-items
                            span.description-text {{ projectInfo.description }}
                            .middle-align
                                .right-align
                                    a.contribute-button(
                                        type="submit"
                                    ) SUBMIT CHANGES
                    .margin67
                    v-tabs
                        v-tab Edit
                        v-tab Add to Plot
                        v-tab-item
                            v-card.main-card
                                v-input(height="400")
                                    textarea.textareas(
                                        style="height: 400px !important; width: 100%;"
                                        v-model="editContent"
                                    )
                        v-tab-item
                            v-card.main-card
                                v-input(height="400")
                                    textarea.textareas(
                                        style="height: 400px !important; width: 100%;"
                                        v-model="newContent"
                                    )
                    .bottom
</template>

<script>
    import firebase from "firebase/app";
    require('firebase/database')

    export default {
        name: "InsertEdit",
        data: () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                projectInfo: {
                    name: "Project Name",
                    description: "Project Description",
                    text: "Chapter 1Lorem Ipsum Blah Blah Blah.",
                    coverArt: "CoverArt.jpg"
                },
                editContent: "Chapter 1Lorem Ipsum Blah Blah Blah.",
                newContent: "",
            }
        },
        methods: {
            getDimensions: function() {
                this.width = window.innerWidth
                this.height = window.innerHeight
            },
            loadPage: function(v) {
                v.projectInfo.name = this.$route.params.projectName
                firebase.database().ref('stories/' + this.$route.params.projectID).on("value", function(snap) {
                    v.projectInfo.description = snap.val().description;
                });
            }
        },
        beforeMount() {
            this.loadPage(this)
        }
    }
</script>

<style scoped>
    .initial-height {
        position: relative;
        top: 30%;
    }
    .margin-67 {
        margin-top: 67px;
    }
    .main-card {
        padding-top: 48px;
        padding-left: 65px;
        padding-right: 65px;
        padding-bottom: 48px;
        background: #FFFFFF;
        box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25) !important;
    }
    .set-vh {
        height: 100%;
    }
    .set-50 {
        height: 50%;
    }
    .title {
        display: block;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 26px;
        color: #091133;
        text-align: left;
    }
    .project-image {
        margin-top: 44px;
        border-top: solid 4px  #00BFA6;
    }
    .project-description {
        text-align: left;
        display: block;
        margin-top: 55px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 20px;
        color: #000000;
    }
    .description-text {
        display: block;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: rgba(9, 36, 51, 0.8);
        width: 55%;
    }
    .middle-align {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%;
    }
    .right-align {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .contribute-button {
        padding: 28px 14px;
        background-color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 36px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #00BFA6;
        border: #00BFA6 solid 2px;
    }
    .contribute-button:hover {
        text-decoration: underline;
    }
    .align-items {
        display: flex;
        justify-content: space-between;
        margin-top: 48px;
        text-align: left;
    }
</style>
